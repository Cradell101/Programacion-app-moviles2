// src/app/registration/registration.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contrasena: string = '';
  verificarContrasena: string = '';

  constructor(private router: Router) { }

  // Método para navegar a la página de inicio (login)
  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  // Método para registrarse
  registrarse() {
    // Verificar si las contraseñas coinciden
    if (this.contrasena !== this.verificarContrasena) {
      // Las contraseñas no coinciden, muestra un mensaje de error
      console.log('Las contraseñas no coinciden.');
      return;
    }

    // Las contraseñas coinciden, puedes realizar el registro aquí
    // Implementa la lógica para registrar al usuario, por ejemplo, enviar datos al servidor

    // Una vez registrado, puedes redirigir al usuario a otra página, por ejemplo, la página de inicio
    this.router.navigate(['/home']);
  }
}

