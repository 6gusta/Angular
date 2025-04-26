import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastropetComponent } from './cadastropet/cadastropet.component';
import { LoginongComponent } from './loginong/loginong.component';
import { CadastroOngComponent } from './cadastroong/cadastro-ong.component';
import { PetsComponent } from './pets/pets.component';
import { IntessadosComponent } from './intessados/intessados.component';
import { PageOngComponent } from './page-ong/page-ong.component';
export const routes: Routes = [
  
  
  
  { path: '', component: HomeComponent }, 
  { path: 'loginong', component: LoginongComponent},
  {path: 'cadastrong', component: CadastroOngComponent},  // Rota para Home
  { path: 'cadastro', component: CadastropetComponent },
  {path: 'pets' , component: PetsComponent},
  {path: 'interesse', component: IntessadosComponent},
  {path: 'acessong' , component: PageOngComponent} // Rota para o cadastro de pet
];
