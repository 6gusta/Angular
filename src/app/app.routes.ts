// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastropetComponent } from './cadastropet/cadastropet.component';
import { LoginongComponent } from './loginong/loginong.component';
import { CadastroOngComponent } from './cadastroong/cadastro-ong.component';
import { PetsComponent } from './pets/pets.component';
import { IntessadosComponent } from './intessados/intessados.component';
import { PageOngComponent } from './page-ong/page-ong.component';
import { FormularioInteressadoComponent } from './formulario-interessado/formulario-interessado.component';
import { ObrigadopelointeresseComponent } from './obrigadopelointeresse/obrigadopelointeresse.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginong', component: LoginongComponent },
  { path: 'cadastrong', component: CadastroOngComponent },
  { path: 'cadastro', component: CadastropetComponent },
   { path: 'cadastro/:id', component: CadastropetComponent },
{path: 'obrigado', component: ObrigadopelointeresseComponent},
  { path: 'pets', component: PetsComponent },
  { path: 'interessados/:id', component: IntessadosComponent },

  { path: 'acessong', component: PageOngComponent },
  { path: 'interesseForm', component: FormularioInteressadoComponent } // <- aqui!
];
