// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isAuthenticated: boolean = false; // Tu lógica de autenticación aquí

    isLoggedIn() {
        return this.isAuthenticated;
    }
}
