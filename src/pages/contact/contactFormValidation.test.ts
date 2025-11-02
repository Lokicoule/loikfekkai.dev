import { describe, expect, it } from "vitest";
import { validateContactForm } from "./contactFormValidation";

const valid = {
  name: "Loïk",
  email: "loik@example.com",
  message: "This message is long enough.",
};

describe("validateContactForm", () => {
  it("accepts a valid form", () => {
    expect(validateContactForm(valid)).toEqual([]);
  });

  it("rejects a malformed email", () => {
    expect(validateContactForm({ ...valid, email: "not-an-email" })).toEqual([
      { field: "email", code: "invalid" },
    ]);
  });

  it("rejects out-of-bounds name and message lengths", () => {
    const errors = validateContactForm({
      ...valid,
      name: "L",
      message: "too short",
    });
    expect(errors).toContainEqual({ field: "name", code: "length" });
    expect(errors).toContainEqual({ field: "message", code: "length" });
  });

  it("accumulates all failing fields", () => {
    expect(validateContactForm({ name: "", email: "", message: "" })).toHaveLength(3);
  });
});
