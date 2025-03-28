import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sign-in',
  imports: [],
  templateUrl: './modal-sign-in.component.html',
  styleUrl: './modal-sign-in.component.css'
})
export class ModalSignInComponent {
  mostrar: boolean = false;

  constructor(private router: Router) {
  }

  open(mostrarP: boolean) {
    this.mostrar = mostrarP;
  }

  close() {
    this.mostrar = false;
  }

  navigateToLogin() {
    this.router.navigate(['/Login']);
  }
}
