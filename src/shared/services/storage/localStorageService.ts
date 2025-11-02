import { StoragePort } from "../../ports";

export class LocalStorageService implements StoragePort {
  public setItem<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting local storage item ${key}:`, error);
    }
  }

  public getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue !== null) {
        return JSON.parse(serializedValue) as T;
      }
      return null;
    } catch (error) {
      console.error(`Error getting local storage item ${key}:`, error);
      return null;
    }
  }

  public removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing local storage item ${key}:`, error);
    }
  }
}
