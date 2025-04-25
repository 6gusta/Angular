import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('heartsContainer', { static: true }) heartsContainer!: ElementRef;

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

