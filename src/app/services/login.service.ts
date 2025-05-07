// src/app/services/login.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/admin/login';

  constructor(private http: HttpClient) {}

  login(data: LoginDTO): Observable<string> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
}
