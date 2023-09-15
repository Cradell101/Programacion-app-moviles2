// src/app/welcome/welcome.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  constructor(private router: Router) { }

  // Función para navegar a la página principal (home)
  startExploring() {
    this.router.navigate(['/home']);
  }
}
