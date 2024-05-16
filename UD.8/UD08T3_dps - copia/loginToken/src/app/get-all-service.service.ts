import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllService {
  apiUrl = 'http://localhost:8080/api/v1/productos';

  constructor(private http: HttpClient) {}

  getAllProductos(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.apiUrl, { headers });
  }
}
