import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcessoongService {

  private apiUrl = 'http://localhost:8080'; // base da API

  constructor(private http: HttpClient) {}

  // 🔹 Listar pets
  listarPets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/pet`);
  }

  // 🔹 Buscar pet por ID (para edição, se quiser)
  buscarPetPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/pet/${id}`);
  }

  // 🔹 Listar interessados
  listarInteressados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/ongs`);
  }

deletarPet(idpet: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/api/excluirpets/${idpet}`);
}

  // (opcional) 🔹 Atualizar pet
  atualizarPet(id: number, dados: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, dados);
  }
}
