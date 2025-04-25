import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

interface Pet {
  nome: string;
  idade: string;
  sexo: string;
  porte: string;
  cidade: string;
  tagsText: string;
  descricao: string;
  fotoBase64: string | null;
}

@Component({
  selector: 'app-cadastropet',
  standalone: true,
  imports: [
    CommonModule,   // para *ngIf, *ngFor, etc.
    FormsModule,    // para ngForm e [(ngModel)]

  ], // adicione CommonModule e FormsModule aqui se preciso
  templateUrl: './cadastropet.component.html',
  styleUrls: ['./cadastropet.component.css']
})
export class CadastropetComponent {
  pet: Pet = {
    nome: '',
    idade: '',
    sexo: '',
    porte: '',
    cidade: '',
    tagsText: '',
    descricao: '',
    fotoBase64: null
  };

  constructor(private router: Router) {}

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => this.pet.fotoBase64 = reader.result as string;
    reader.readAsDataURL(file);
  }

  onSubmit() {
    const pets: any[] = JSON.parse(localStorage.getItem('pets') || '[]');
    const novoPet = {
      ...this.pet,
      tags: this.pet.tagsText.split(',').map(t => t.trim())
    };
    pets.push(novoPet);
    localStorage.setItem('pets', JSON.stringify(pets));
    this.router.navigate(['/pets']);
  }
}
