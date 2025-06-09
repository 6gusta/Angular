import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GosteiService {
  //private apiUrl = 'https://ong-pets.onrender.com/api';
   private apiUrl = 'http://localhost:8080/api/pets';

  constructor(private http: HttpClient) {}

  getPetById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
