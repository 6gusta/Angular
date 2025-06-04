import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetverService {
  private apiUrl = 'https://ong-pets.onrender.com/api'; // base da API

  constructor(private http: HttpClient) {}

  /** Lista todos os pets */
  listarPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pet`);
  }

  /** Busca pet por ID */
  buscarPetPorId(id: number | string): Observable<any> {
    const parsedId = Number(String(id).split(':')[0]); // ✅ Garante que mesmo se vier '1:1', vira 1
    return this.http.get<any>(`${this.apiUrl}/pet/${parsedId}`);
  }

  /** Filtra pets por parâmetros */
  filtrarPets(params: HttpParams): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filtra`, { params });
  }
}
