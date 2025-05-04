import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetverService } from '../services/petver.service'; // Certo agora
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any[] = [];

  constructor(private petService: PetverService) {} // Corrigido aqui também

  ngOnInit(): void {
    this.carregarPets();
  }

  carregarPets(): void {
    this.petService.listarPets().subscribe({
      next: (dados) => {
        this.pets = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar pets:', erro);
      }
    });
  }
}
