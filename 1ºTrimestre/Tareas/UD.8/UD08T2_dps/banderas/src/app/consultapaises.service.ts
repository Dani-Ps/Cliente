import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultapaisesService {

  constructor(private http: HttpClient) { }

  getPaises(region: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }
}
