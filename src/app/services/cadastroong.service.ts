import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Você precisa criar ou importar a interface Ong
export interface Ong {
  nome: string;
  email: string;
  senha: string;

}

@Injectable({
  providedIn: 'root'
})
export class CadastroongService {

  private apiUrl ='https://ong-pets.onrender.com/api'; // corrigido

  constructor(private http: HttpClient) {}

  registerong(ong: Ong): Observable<any> {

    const body = {
      nome: ong.nome,
      email: ong.email,
      senha: ong.senha,
 

    };
      return this.http.post(this.apiUrl, body, {
      responseType: 'text'
  });
}}

