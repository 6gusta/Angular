import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoongService } from '../services/acessoong.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-ong',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-ong.component.html',
  styleUrls: ['./page-ong.component.css']
})
export class PageOngComponent implements OnInit {

  pets: any[] = [];
  interessados: any[] = [];
petId: any|string;
id: any|string;

  constructor(private api: AcessoongService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

 carregarDados(): void {
  this.api.listarPets().subscribe({
    next: (pets) => {
      console.log('🐾 Pets recebidos do backend:', pets); // 👈 ADICIONE AQUI
      this.pets = pets;
    },
    error: (err) => console.error('Erro ao listar pets', err)
  });

  this.api.listarInteressados().subscribe({
    next: (interessados) => this.interessados = interessados,
    error: (err) => console.error('Erro ao listar interessados', err)
  });
}

deletarPet(idPet: number): void {
  if (confirm('Tem certeza que deseja excluir este pet?')) {
    this.api.deletarPet(idPet).subscribe({
      next: () => {
        // Atualiza a lista local removendo o pet excluído
        this.pets = this.pets.filter(p => p.idpet !== idPet);
        alert('Pet excluído com sucesso!');
      },
      error: (error: HttpErrorResponse) => {
        const errorMessage = error.error?.message || 'Erro desconhecido ao excluir o pet';
        alert('Erro ao excluir pet: ' + errorMessage);
        console.error('Erro ao excluir pet', error);
      }
    });
  }
}

  carregarPets() {
    throw new Error('Method not implemented.');
  }
}
