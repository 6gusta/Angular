import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GosteiService } from '../services/gostei.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intessados',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './intessados.component.html',
  styleUrls: ['./intessados.component.css']
})
export class IntessadosComponent implements OnInit {
  pet: any;

  constructor(
    private route: ActivatedRoute,
    private interesseService: GosteiService 
  ) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    console.log('ID Capturado:', idParam);

    if (idParam) {
      const cleanIdParam = idParam.split(':')[0]; // Corrige possíveis formatos inválidos
      const id = Number(cleanIdParam);

      if (!isNaN(id) && id > 0) {
        this.interesseService.getPetById(id).subscribe({
          next: (data) => {
            this.pet = data;
            console.log('Pet carregado:', this.pet);
          },
          error: (err) => {
            console.error('Erro ao buscar pet:', err);
          }
        });
      } else {
        console.error('ID inválido na URL:', idParam);
      }
    } else {
      console.error('Parâmetro ID não encontrado na URL');
    }
  });
}
}