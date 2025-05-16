import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetverService } from '../services/petver.service';
import { FiltroService } from '../services/filtro.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';

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

  // 🔁 Agora usando a rota /filtra do backend
 filtrarPets(): void {
  let params = new HttpParams();

  if (this.estadoSelecionado) params = params.set('estado', this.estadoSelecionado);
  if (this.cidadeSelecionada) params = params.set('cidade', this.cidadeSelecionada);
  if (this.porteSelecionado)  params = params.set('porte', this.porteSelecionado);
  if (this.idadeSelecionada)  params = params.set('idade', this.idadeSelecionada);

  this.petService.filtrarPets(params).subscribe({
    next: (dados) => {
      this.pets = dados;
    },
    error: (erro) => {
      console.error('Erro ao filtrar pets:', erro);
    }
  });
}
}