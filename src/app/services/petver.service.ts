import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetverService {
  private apiUrl = 'http://localhost:8080/api'; // base da API

  constructor(private http: HttpClient) {}

  /** Lista todos os pets */
  listarPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pet`); // GET /api/pet
  }

  /** Busca pet por ID */
  buscarPetPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pet/${id}`); // GET /api/pet/{id}
  }

  /** Filtra pets por parâmetros */
  filtrarPets(params: HttpParams): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filtra`, { params }); // GET /api/pet/filtra
  }
}
