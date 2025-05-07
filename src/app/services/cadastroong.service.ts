import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Você precisa criar ou importar a interface Ong
export interface Ong {
  nome: string;
  email: string;
  senha: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroongService {

  private apiUrl = 'http://localhost:8080/api/admin/registerong'; // corrigido

  constructor(private http: HttpClient) {}

  registerong(ong: Ong): Observable<any> {

    const body = {
      nome: ong.nome,
      email: ong.email,
      senha: ong.senha,
      role: ong.role

    };
      return this.http.post(this.apiUrl, body, {
      responseType: 'text'
  });
}}

