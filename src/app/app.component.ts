import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginongComponent } from './loginong/loginong.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,  // Deixando claro que o componente é standalone
  imports: [
    RouterModule,
    HeaderComponent,
    LoginongComponent,
    IndexComponent,
    FooterComponent,
    HttpClientModule // Importando o HttpClientModule aqui, se o HttpClient for usado
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meu App de Adoção de Pets';
}
