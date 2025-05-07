import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pet {
  nome: string;
  idade: string;  // será transformado em número antes de enviar
  sexo: string;
  porte: string;
  cidade: string;
  tagsText: string;  // será transformado em array de strings
  descricao: string;
  fotoBase64: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private apiUrl = 'http://localhost:8080/api/register'; // ajuste se necessário

  constructor(private http: HttpClient) {}

  registerPet(pet: Pet): Observable<any> {
    const body = {
      nome: pet.nome,
      idade: pet.idade,// Transformando idade de string para número
      sexo: pet.sexo,
      porte: pet.porte,  // Mantendo o nome "porte" conforme esperado pelo backend
      cidade: pet.cidade,
      caracteristicas: pet.tagsText,  // Transformando tags em array de strings
      descricao: pet.descricao,
      fotoperfil: pet.fotoBase64  // Enviando a foto base64
    };

    return this.http.post(this.apiUrl, body, {
      responseType: 'text'

    });  // Enviando o objeto para o backend
  }
}
