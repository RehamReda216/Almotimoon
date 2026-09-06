import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  storeValue(key: string, value: unknown): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error storing value in localStorage', error);
    }
  }

  getValue<T = unknown>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key);

      if (!serializedValue || serializedValue === 'null') {
        return null;
      }

      try {
        return JSON.parse(serializedValue) as T;
      } catch {
        return serializedValue as T;
      }
    } catch (error) {
      console.error('Error parsing localStorage value', error);
      return null;
    }
  }

  removeValue(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}
