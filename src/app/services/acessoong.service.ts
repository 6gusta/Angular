import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcessoongService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pet`);
  }

  getInteressados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ongs`);
  }
}
