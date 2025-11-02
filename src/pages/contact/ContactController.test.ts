import { describe, expect, it, vi } from "vitest";
import { ContactController } from "./ContactController";
import {
  LoggingPort,
  MailingPort,
  NotificationPort,
  TranslationPort,
} from "../../shared/ports";

function makePorts(sendImpl: MailingPort["send"]) {
  const notifications: NotificationPort = { show: vi.fn(), update: vi.fn() };
  const mailing: MailingPort = { send: vi.fn(sendImpl) };
  const logging: LoggingPort = { logError: vi.fn() };
  const translator: TranslationPort = {
    translate: (key) => key,
    setLanguage: vi.fn(),
    language: "en",
  };
  return { notifications, mailing, logging, translator };
}

const valid = {
  name: "Loïk",
  email: "loik@example.com",
  message: "This message is long enough.",
};

describe("ContactController.submitContactForm", () => {
  it("returns ok and upgrades the toast on success", async () => {
    const ports = makePorts(async () => {});
    const controller = new ContactController(
      ports.notifications,
      ports.mailing,
      ports.logging,
      ports.translator
    );

    const result = await controller.submitContactForm(valid);

    expect(result).toEqual({ ok: true });
    expect(ports.notifications.update).toHaveBeenCalledTimes(1);
  });

  it("fails without sending when validation rejects", async () => {
    const ports = makePorts(async () => {});
    const controller = new ContactController(
      ports.notifications,
      ports.mailing,
      ports.logging,
      ports.translator
    );

    const result = await controller.submitContactForm({ ...valid, email: "nope" });

    expect(result).toEqual({ ok: false, reason: "validation" });
    expect(ports.mailing.send).not.toHaveBeenCalled();
  });

  it("reports send failure instead of resolving as success", async () => {
    const ports = makePorts(async () => {
      throw new Error("smtp down");
    });
    const controller = new ContactController(
      ports.notifications,
      ports.mailing,
      ports.logging,
      ports.translator
    );

    const result = await controller.submitContactForm(valid);

    expect(result).toEqual({ ok: false, reason: "send" });
    expect(ports.logging.logError).toHaveBeenCalled();
  });

  it("rejects re-entrant submits while one is pending", async () => {
    let release!: () => void;
    const ports = makePorts(
      () => new Promise<void>((resolve) => (release = resolve))
    );
    const controller = new ContactController(
      ports.notifications,
      ports.mailing,
      ports.logging,
      ports.translator
    );

    const first = controller.submitContactForm(valid);
    const second = await controller.submitContactForm(valid);
    release();

    expect(second).toEqual({ ok: false, reason: "pending" });
    await expect(first).resolves.toEqual({ ok: true });
  });
});
