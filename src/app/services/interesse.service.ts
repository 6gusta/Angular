import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Torna o serviço disponível em toda a aplicação
})
export class InteresseService {
  getPetById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8080/api/Cadastrointer'; // URL da API do backend (ajuste conforme necessário)

  constructor(private http: HttpClient) {}

  // Função para enviar os dados para o backend via POST sem usar modelo
  enviarInteresse(nome: string, email: string, telefone: string, descricao?: string): Observable<string> {
    // Corpo da requisição sem modelo (simplesmente um objeto)
    const body = { nome, email, telefone, descricao };

    // Envia os dados e espera um texto como resposta
    return this.http.post(this.apiUrl, body, { responseType: 'text' });
  }
}
