import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  constructor(private http: HttpClient) {}

  getEstados(): Observable<any> {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
  }

  getCidades(uf: string): Observable<any> {
    return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  }
}