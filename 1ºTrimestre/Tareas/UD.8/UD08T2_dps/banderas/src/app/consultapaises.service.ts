import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultapaisesService {

  constructor(private http: HttpClient) { }

  getPaises(region: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v1/productos/${region}`);
  }
}
