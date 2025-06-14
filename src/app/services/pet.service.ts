import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pet {
  fotoperfil: any;
  nome: string;
  idade: string;
  sexo: string;
  porte: string;
  estado: string;
  cidade: string;
  tagsText: string;  
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //private baseUrl = 'https://ong-pets.onrender.com/api';
    private baseUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) {}

  registerPet(pet: Pet): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, pet, { responseType: 'text' });
  }

  updatePet(id: string, pet: Pet): Observable<any> {
    return this.http.put(`${this.baseUrl}/user/${id}`, pet, { responseType: 'text' });
  }

  getPetById(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.baseUrl}/pets/${id}`);
  }
}
