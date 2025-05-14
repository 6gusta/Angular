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
    nome: '',  // Alterado para 'nome' ao invés de 'email'
    senha: ''
  };

  errorMessage: string | null = null;
pet: any;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.login).subscribe({
      next: (res: string) => {
        alert(res); // "Login bem-sucedido"
        this.router.navigate(['/acessong']);
      },
      error: (err: any) => {
        console.error(err);
        this.errorMessage = 'Nome ou senha incorretos';
      }
    });
  }
}
