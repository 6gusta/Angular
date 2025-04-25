import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { IndexComponent } from "../index/index.component";


@Component({
  selector: 'app-home',
  imports: [ IndexComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
toggleDarkMode() {
throw new Error('Method not implemented.');
}

}
