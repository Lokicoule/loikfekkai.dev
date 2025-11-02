import { useState } from "react";

export type AsyncStatus = "idle" | "pending" | "success" | "error";

export const useAsyncCallback = <TArgs extends unknown[]>(
  fn: (...args: TArgs) => Promise<{ ok: boolean }>
): [AsyncStatus, (...args: TArgs) => Promise<void>] => {
  const [status, setStatus] = useState<AsyncStatus>("idle");

  const run = async (...args: TArgs) => {
    setStatus("pending");
    const result = await fn(...args);
    setStatus(result.ok ? "success" : "error");
  };

  return [status, run];
};
