import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastropetComponent } from './cadastropet/cadastropet.component';
import { LoginongComponent } from './loginong/loginong.component';
import { CadastroOngComponent } from './cadastroong/cadastro-ong.component';
export const routes: Routes = [
  
  
  
  { path: '', component: HomeComponent }, 
  { path: 'loginong', component: LoginongComponent},
  {path: 'cadastrong', component: CadastroOngComponent},  // Rota para Home
  { path: 'cadastro', component: CadastropetComponent },  // Rota para o cadastro de pet
];
