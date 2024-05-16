import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  async login(email: string, password: string) {
    const response = await this.http.post<any>(this.apiUrl, { email, password }).toPromise();
    if (response && response.token) {
      localStorage.setItem(this.tokenKey, response.token);
    }
    return response;
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
