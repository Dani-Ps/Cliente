import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPaisesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getPaisesPorContinente(continente: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/region/${continente}`);
  }
}
