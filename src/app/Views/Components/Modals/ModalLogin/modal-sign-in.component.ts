import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-sign-in.component.html',
  styleUrl: './modal-sign-in.component.css'
})
export class ModalSignInComponent {

  protected mostrar: boolean = false;

  constructor(private router: Router) {}

  open(): void {
    this.mostrar = true;
  }

  close(): void {
    this.mostrar = false;
  }

  navigateToLogin() {
    this.router.navigate(['/Login']);
    this.close();
  }
}
