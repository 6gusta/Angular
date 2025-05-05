import { Component } from '@angular/core';
import { CadastroongService } from '../services/cadastroong.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-ong',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro-ong.component.html',
  styleUrls: ['./cadastro-ong.component.css'] // corrigido aqui
})
export class CadastroOngComponent {

  ong = {
    nome: '',
    email: '',
    senha: '',
    role: ''

  };

  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private cadastroService: CadastroongService
  ) {}

  onSubmit() {
    // Verificando se as senhas coincidem
   
    console.log('onSubmit chamado');
    console.log('Enviando Cadastro da ONG:', this.ong);

    this.cadastroService.registerong(this.ong).subscribe({
      next: (response: string) => {
        alert(response);  // Exibindo a resposta do backend
        this.router.navigate(['/interesse']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar ONG:', err);
        this.errorMessage = 'Erro ao cadastrar a ONG. Veja o console.';
      }
    });
  }
}
