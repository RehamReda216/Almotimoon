import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { LocalstorageService } from '../../../../shared/services/loacalstorage/localstorage.service';
import { UserdataService } from '../../../../shared/services/userdata/userdata.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly localStorage = inject(LocalstorageService);
  private readonly userData = inject(UserdataService);
  private readonly apiBaseUrl = environment.apiBaseUrl;

  register(userData: unknown) {
    return this.http.post(`${this.apiBaseUrl}/users/register`, userData);
  }

  login(userData: unknown) {
    return this.http.post(`${this.apiBaseUrl}/users/login`, userData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Sends access token via auth interceptor and refreshToken in the body,
   * then clears all local session data whether the request succeeds or fails.
   */
  logout(): Observable<unknown> {
    const refreshToken =
      this.localStorage.getValue<string>('refresh_token') ?? '';

    return this.http
      .post(
        `${this.apiBaseUrl}/users/logout`,
        { refreshToken },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .pipe(finalize(() => this.clearSession()));
  }

  /** Local-only logout used when the API call is unavailable. */
  clearSession(): void {
    this.localStorage.clearAll();
    this.userData.clearUserData();
  }

  getAccessToken() {
    const refreshToken =
      this.localStorage.getValue<string>('refresh_token') ?? '';

    return this.http.post(
      `${this.apiBaseUrl}/users/refresh-token`,
      { refreshToken },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
