import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetverService } from '../services/petver.service';
import { FiltroService } from '../services/filtro.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: any[] = [];
  ufs: any[] = [];
  cidades: any[] = [];

  // Filtros
  estadoSelecionado: any;
  cidadeSelecionada: any;
  porteSelecionado: any;
  idadeSelecionada: any;

  constructor(
    private petService: PetverService,
    private localidadeService: FiltroService
  ) {}

  ngOnInit(): void {
    this.carregarPets();

    this.localidadeService.getEstados().subscribe(data => {
      this.ufs = data;
    });
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

  onUfChange(uf: string): void {
    this.localidadeService.getCidades(uf).subscribe(data => {
      this.cidades = data;
    });
  }

  // ✅ Filtro baseado nos valores selecionados
  filtrarPets(): void {
    this.petService.listarPets().subscribe({
      next: (dados) => {
        this.pets = dados.filter(pet => {
          return (
            (!this.estadoSelecionado || pet.uf === this.estadoSelecionado) &&
            (!this.cidadeSelecionada || pet.cidade === this.cidadeSelecionada) &&
            (!this.porteSelecionado || pet.porte === this.porteSelecionado) &&
            (!this.idadeSelecionada || pet.idadeCategoria === this.idadeSelecionada)
          );
        });
      },
      error: (erro) => {
        console.error('Erro ao filtrar pets:', erro);
      }
    });
  }
}
