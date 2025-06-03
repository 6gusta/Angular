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
  private apiUrl = 'https://ong-pets.onrender.com/register'; 

  constructor(private http: HttpClient) {}


  registerPet(pet: Pet): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, pet, { responseType: 'text' });
  }

  updatePet(id: string, pet: Pet): Observable<any> {
    return this.http.put(`${this.apiUrl}/user/${id}`, pet, { responseType: 'text' });
  }


 getPetById(id: string): Observable<Pet> {
  return this.http.get<Pet>(`${this.apiUrl}/pets/${id}`); 
}

}
