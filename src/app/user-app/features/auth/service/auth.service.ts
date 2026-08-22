import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://overarch-surfer-blatancy.ngrok-free.dev/api/users';
  constructor(private httpService: HttpClient) {}
  register(userData: any) {
    console.log(userData);
    return this.httpService.post(`${this.baseUrl}/register`, userData);
  }
  login(userData: any) {
    return this.httpService.post(`${this.baseUrl}/login`, userData);
  }
  signInWithGoogle() {
    return this.httpService.get(`${this.baseUrl}/auth/google`);
  }
  logout(data: any) {
    return this.httpService.post(`${this.baseUrl}/logout`, data);
  }
  getAccessToken(refresh_token: string) {
    return this.httpService.post(
      `${this.baseUrl}/refresh-token`,
      refresh_token,
    );
  }
}
