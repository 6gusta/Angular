import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcessoongService {
  private apiUrl = 'http://localhost:8080/api/pet';

  constructor(private http: HttpClient) {}

  listarPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  buscarPetPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  listarInteressados(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/ongs');
  }
}
