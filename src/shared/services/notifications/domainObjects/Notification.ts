export type NotificationType = "success" | "error" | "warning" | "info";

export class Notification {
  private constructor(
    private readonly id: string,
    private readonly message: string,
    private readonly type: NotificationType
  ) {}

  public static createInfo(message: string): Notification {
    return new Notification(crypto.randomUUID(), message, "info");
  }

  public static createWarning(message: string): Notification {
    return new Notification(crypto.randomUUID(), message, "warning");
  }

  public static createError(message: string): Notification {
    return new Notification(crypto.randomUUID(), message, "error");
  }

  public getId(): string {
    return this.id;
  }

  public getMessage(): string {
    return this.message;
  }

  public getType(): NotificationType {
    return this.type;
  }

  public withMessageAndType(
    message: string,
    type: NotificationType
  ): Notification {
    return new Notification(this.id, message, type);
  }
}
