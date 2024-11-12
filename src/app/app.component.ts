import { Component, Renderer2 } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from "./about/about.component";

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',


})
export class AppComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    // Subscribe to route changes
    this.router.events.subscribe(() => {
      // Update `showHeader` based on the current URL
      this.showHeader = this.router.url !== '/your-template';
    });
  }
  
}
