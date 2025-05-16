import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet, PetService } from '../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FiltroService } from '../services/filtro.service';

@Component({
  selector: 'app-cadastropet',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastropet.component.html',
  styleUrls: ['./cadastropet.component.css'],
})
export class CadastropetComponent implements OnInit {
  pet: Pet = {
    nome: '',
    idade: '',
    sexo: '',
    porte: '',
    estado: '',
    cidade: '',
    tagsText: '',
    descricao: '',
    fotoperfil: null
  };

  estados: any[] = [];
  cidades: any[] = [];

  errorMessage: string | null = null;
  isEditMode: boolean = false;
  petId: string | null = null;

  constructor(
    private router: Router,
    private petService: PetService,
    private route: ActivatedRoute,
    private filtroService: FiltroService  // injeta o serviço
  ) {}

  ngOnInit(): void {
    this.carregarEstados();

    this.petId = this.route.snapshot.paramMap.get('id');
    if (this.petId) {
      this.isEditMode = true;
      this.carregarPetParaEdicao(this.petId);
    }
  }

  carregarEstados(): void {
    this.filtroService.getEstados().subscribe({
      next: (res: any[]) => {
        this.estados = res;
      },
      error: () => {
        console.error('Erro ao carregar estados');
      }
    });
  }

  carregarCidades(uf: string): void {
    this.filtroService.getCidades(uf).subscribe({
      next: (res: any[]) => {
        this.cidades = res;
      },
      error: () => {
        console.error('Erro ao carregar cidades');
      }
    });
  }

  onEstadoChange(): void {
    if (this.pet.estado) {
      this.carregarCidades(this.pet.estado);
      this.pet.cidade = ''; // limpa a cidade ao trocar estado
    } else {
      this.cidades = [];
      this.pet.cidade = '';
    }
  }

  carregarPetParaEdicao(id: string): void {
    this.petService.getPetById(id).subscribe({
      next: (pet) => {
        this.pet = pet;

        if (this.pet.estado) {
          this.carregarCidades(this.pet.estado);
        }
      },
      error: () => {
        this.errorMessage = 'Erro ao buscar pet. Veja o console.';
      }
    });
  }

  onSubmit() {
    if (!this.pet.fotoperfil) {
      this.errorMessage = 'Por favor, adicione uma foto do pet!';
      return;
    }

    const petData = {
      nome: this.pet.nome,
      idade: this.pet.idade,
      sexo: this.pet.sexo,
      porte: this.pet.porte,
      cidade: this.pet.cidade,
      estado: this.pet.estado,
      tagsText: this.pet.tagsText,
      descricao: this.pet.descricao,
      fotoperfil: this.pet.fotoperfil
    };

    if (this.isEditMode && this.petId) {
      this.petService.updatePet(this.petId, petData).subscribe({
        next: () => {
          alert('Pet atualizado com sucesso!');
          this.router.navigate(['/pets']);
        },
        error: (err) => {
          console.error('Erro ao atualizar o pet:', err);
          this.errorMessage = 'Erro ao atualizar o pet. Veja o console.';
        }
      });
    } else {
      this.petService.registerPet(petData).subscribe({
        next: () => {
          alert('Pet registrado com sucesso!');
          this.router.navigate(['/pets']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar o pet:', err);
          this.errorMessage = 'Erro ao cadastrar o pet. Veja o console.';
        }
      });
    }
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.pet.fotoperfil = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}