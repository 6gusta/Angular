import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  getCidades(uf: string) {
    throw new Error('Method not implemented.');
  }
  getEstados() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
