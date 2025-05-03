import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'] // <- Corrigido aqui
})
export class IndexComponent implements AfterViewInit { // <- Corrigido aqui o nome da classe

  @ViewChild('heartsContainer', { static: false }) 
  heartsContainer!: ElementRef;

  ngAfterViewInit() {
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.textContent = '💖';
      this.heartsContainer.nativeElement.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 800);
  }
}
