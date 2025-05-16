import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pet {
  fotoperfil: any;
  nome: string;
  idade: string;  // será transformado em número antes de enviar
  sexo: string;
  porte: string;
  estado: string;
  cidade: string;
  tagsText: string;  // será transformado em array de strings
  descricao: string;

}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:8080/api'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  // Método para cadastrar um pet
  registerPet(pet: Pet): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, pet, { responseType: 'text' });
  }

  // Método para atualizar um pet
  updatePet(id: string, pet: Pet): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, pet, { responseType: 'text' });
  }

  // Método para buscar um pet pelo ID
 getPetById(id: string): Observable<Pet> {
  return this.http.get<Pet>(`${this.apiUrl}/pets/${id}`); // ex: /api/1
}

}
