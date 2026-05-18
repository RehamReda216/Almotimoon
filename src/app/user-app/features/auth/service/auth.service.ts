import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpClient) {}
  register(userData: any) {
    console.log(userData);
    return this.httpService.post(
      'https://overarch-surfer-blatancy.ngrok-free.dev/api/users/register',
      userData,
    );
  }
  login(userData: any) {
    return this.httpService.post(
      'https://overarch-surfer-blatancy.ngrok-free.dev/api/users/login',
      userData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
  logout() {
    return this.httpService
      .post(
        'https://overarch-surfer-blatancy.ngrok-free.dev/api/users/logout',

        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .subscribe();
  }
  getAccessToken() {
    return this.httpService.post(
      'https://overarch-surfer-blatancy.ngrok-free.dev/api/users/refresh-token',

      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
