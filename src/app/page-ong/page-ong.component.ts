import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa para *ngFor funcionar
import { AcessoongService } from '../services/acessoong.service';

@Component({
  selector: 'app-page-ong',
  standalone: true, // Marque o componente como standalone
  imports: [CommonModule], // Importa CommonModule diretamente
  templateUrl: './page-ong.component.html',
  styleUrls: ['./page-ong.component.css']
})
export class PageOngComponent implements OnInit {
  pets: any[] = [];
  interessados: any[] = [];

  constructor(private api: AcessoongService) {}

  ngOnInit(): void {
    this.api.listarPets().subscribe(pets => this.pets = pets);  // Ajustei para listarPets
    this.api.listarInteressados().subscribe(ongs => this.interessados = ongs);  // Ajustei para listarInteressados
  }
}
