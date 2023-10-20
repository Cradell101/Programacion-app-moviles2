// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions'; // Asegúrate de que la ruta sea correcta

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
    private alertController: AlertController,
    private store: Store
  ) { }

  login() {
    // Despacha la acción de inicio de sesión con los datos del formulario
    this.store.dispatch(AuthActions.login({ username: this.username, password: this.password }));
  }

  // Método para navegar a la página de registro
  goToRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  // Método para navegar a la página de inicio
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


