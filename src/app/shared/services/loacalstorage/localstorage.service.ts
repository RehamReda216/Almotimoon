import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}
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
      const serializedValue = localStorage.getItem(key);

      if (!serializedValue) {
        return null;
      }

      return serializedValue;
    } catch (error) {
      console.error('Error parsing localStorage value', error);
      return null;
    }
  }
}
