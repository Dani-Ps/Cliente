import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/signin';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {}

  async login(email: string, password: string, cabeceras: HttpHeaders) {
    const response = await this.http
      .post<any>(this.apiUrl, { email, password })
      .toPromise();
    if (response && response.token) {
      localStorage.setItem(this.tokenKey, response.token);
    }
    return response;
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
