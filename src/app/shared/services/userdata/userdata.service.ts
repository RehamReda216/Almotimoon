import { Injectable, computed, inject, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { LocalstorageService } from '../loacalstorage/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  private readonly localStorage = inject(LocalstorageService);
  private readonly $userDataSignal = signal<Record<string, unknown>>({});
  private readonly loggedInSignal = signal(false);

  readonly $userData = this.$userDataSignal.asReadonly();
  readonly isLoggedIn = this.loggedInSignal.asReadonly();
  readonly hasUserData = computed(
    () => Object.keys(this.$userDataSignal()).length > 0,
  );

  constructor() {
    this.setUserData();
  }

  tokenDecoding(): Record<string, unknown> | null {
    const token = this.localStorage.getValue<string>('access_token');
    if (!token) {
      return null;
    }

    try {
      return jwtDecode<Record<string, unknown>>(token);
    } catch (error) {
      console.error('Error decoding access token', error);
      return null;
    }
  }

  setUserData(): void {
    const userData = this.tokenDecoding();
    if (!userData) {
      this.clearUserData();
      return;
    }

    this.$userDataSignal.set(userData);
    this.loggedInSignal.set(true);
  }

  clearUserData(): void {
    this.$userDataSignal.set({});
    this.loggedInSignal.set(false);
  }
}
