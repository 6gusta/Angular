import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetverService {
  private apiUrl = 'http://localhost:8080/api/pet';

  /** Lista todos os pets */
  listarPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  /** Busca um pet pelo ID */
  buscarPetPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }
}

