import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sign-in',
  imports: [CommonModule],
  templateUrl: './modal-sign-in.component.html',
  styleUrl: './modal-sign-in.component.css'
})
export class ModalSignInComponent {

  mostrar: boolean = false;

  constructor(private router: Router) {
  }

  open(): void {
    console.log('Modal open() called');
    console.log('Variable' + ' ' + this.mostrar);
    this.mostrar = true;
  }

  close(): void {
    console.log('Modal close() called');
    console.log('Variable' + ' ' + this.mostrar)
    this.mostrar = false;
  }

  navigateToLogin() {
    this.router.navigate(['/Login']);
    this.close();
  }
}
