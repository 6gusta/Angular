import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InteresseService } from '../services/interesse.service';

@Component({
  selector: 'app-formulario-interessado',
  imports: [CommonModule, FormsModule,],
  templateUrl: './formulario-interessado.component.html',
  styleUrl: './formulario-interessado.component.css'
})
export class FormularioInteressadoComponent {
  nome = '';
  email = '';
  whatsapp = '';
  mensagem = '';

  constructor(private interesseService: InteresseService) {}

  enviarInteresse() {
    this.interesseService.enviarInteresse(this.nome, this.email, this.whatsapp, this.mensagem)
      .subscribe({
        next: (response) => {
          alert('Interesse enviado com sucesso!');
          console.log(response);
        },
        error: (err) => {
          alert('Erro ao enviar interesse.');
          console.error(err);
        }
      });
  }
}