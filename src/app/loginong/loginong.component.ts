import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginong',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './loginong.component.html',
  styleUrls: ['./loginong.component.css']
})
export class LoginongComponent {
  login = {
    nome: '',  // pode ser 'email' ou 'nome' dependendo do backend
    senha: ''
  };

  errorMessage: string | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
   this.loginService.login(this.login).subscribe({
  next: (response) => {
    const token = response.token;
    if (token) {
      localStorage.setItem('token', token);
      alert('Login realizado com sucesso!');
      this.router.navigate(['/acessong']);
    }
  },
  error: (err) => {
    this.errorMessage = err.error || 'Erro ao fazer login.';
  }
});

  }
}
