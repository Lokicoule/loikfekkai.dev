import { useEffect, useState } from "react";
import { Presenter } from "./Presenter";

export function usePresenter<T>(presenter: Presenter<T>): T | undefined {
  const [vm, setVm] = useState<T>();

  useEffect(() => presenter.attach(setVm), [presenter]);

  return vm;
}
