import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginongComponent } from './loginong/loginong.component';
import { IndexComponent } from "./index/index.component";
import { FooterComponent } from "./footer/footer.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    LoginongComponent,
    IndexComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
