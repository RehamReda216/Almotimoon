import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
  isStored(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
  storeValue(key: string, value: any) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error storing value in localStorage', error);
    }
  }
  getValue(key: string) {
    try {
      if (!this.isStored(key)) {
        return null;
      }

      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (error) {
      console.error('Error parsing localStorage value', error);
      return null;
    }
  }
  removeValue(key: string) {
    if (!this.isStored(key)) {
      console.warn(`Key "${key}" does not exist in localStorage.`);
      return;
    }
    localStorage.removeItem(key);
  }
}
