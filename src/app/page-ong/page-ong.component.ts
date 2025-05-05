import { Component, OnInit } from '@angular/core';
import { AcessoongService } from '../services/acessoong.service';

@Component({
  selector: 'app-page-ong',
  templateUrl: './page-ong.component.html',
  styleUrls: ['./page-ong.component.css'] // Correção aqui: é "styleUrls" com "s"
})
export class PageOngComponent implements OnInit {
  pets: any[] = [];
  interessados: any[] = [];

  constructor(private api: AcessoongService) {}

  ngOnInit(): void {
    this.api.getPets().subscribe(pets => this.pets = pets);
    this.api.getInteressados().subscribe(ongs => this.interessados = ongs);
  }
}
