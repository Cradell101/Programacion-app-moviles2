// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  login() {
    // Realiza aquí la lógica de autenticación, por ejemplo, verifica las credenciales con un servidor.
    // En este ejemplo, asumiremos que el inicio de sesión es exitoso y navegaremos a una página diferente.

    // Reemplaza esto con tu lógica de autenticación.
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Inicio de sesión exitoso, navega a la página de inicio.
      this.router.navigate(['/home']);
    } else {
      // Inicio de sesión fallido, muestra un mensaje de error o manéjalo según sea necesario.
      // Por simplicidad, solo mostraremos un mensaje en la consola.
      console.log('Inicio de sesión fallido. Por favor, verifica tus credenciales.');
    }
  }

  // Método para navegar a la página de registro
  goToRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  // Método para navegar a la página de bienvenida
  goToHomePage() {
    this.router.navigate(['/home']);
  }

  // Método para manejar el botón "Olvidaste tu contraseña?"
  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      message: 'Se enviarán instrucciones para restablecer tu contraseña a tu correo electrónico.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Manejar el botón "Cancelar" si es necesario
          }
        },
        {
          text: 'Enviar',
          handler: () => {
            // Agrega aquí la lógica para enviar un correo con instrucciones para restablecer la contraseña
            // Puedes hacer una solicitud a un servicio o API para realizar esta acción.
          }
        }
      ]
    });

    await alert.present();
  }
}
