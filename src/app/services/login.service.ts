import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/login';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //private apiUrl = 'https://ong-pets.onrender.com/api';
   private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

 login(data: LoginDTO): Observable<{ token: string }> {
  return this.http.post<{ token: string }>(this.apiUrl, data);
}

}
