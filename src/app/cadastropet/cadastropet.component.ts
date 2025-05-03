import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastropet',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastropet.component.html',
  styleUrls: ['./cadastropet.component.css'],
})
export class CadastropetComponent {
  pet = {
    nome: '',
    idade: '',
    sexo: '',
    porte: '',
    cidade: '',
    tagsText: '', // Usando tagsText como na interface
    descricao: '',
    fotoBase64: null as string | null // Renomeado para fotoBase64
  };

  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private petService: PetService
  ) {}

  onSubmit() {
    console.log('onSubmit chamado');
  
    if (!this.pet.fotoBase64) {
      this.errorMessage = 'Por favor, adicione uma foto do pet!';
      return;
    }
  
    const petData = {
      nome: this.pet.nome,
      idade: this.pet.idade, // String mesmo
      sexo: this.pet.sexo,
      porte: this.pet.porte,
      cidade: this.pet.cidade,
      tagsText: this.pet.tagsText, // Agora está correto (usando tagsText)
      descricao: this.pet.descricao,
      fotoBase64: this.pet.fotoBase64 // Renomeado para fotoBase64
    };
  
    console.log('Enviando pet:', petData);
  
    this.petService.registerPet(petData).subscribe({
      next: (response: string) => {
        alert(response); // Resposta simples, exibe a mensagem
        this.router.navigate(['/pets']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar pet:', err);
        this.errorMessage = 'Erro ao cadastrar o pet. Veja o console.';
      }
    });
  }
  
  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.pet.fotoBase64 = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
