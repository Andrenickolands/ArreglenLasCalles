import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-sign-in',
  imports: [],
  templateUrl: './modal-sign-in.component.html',
  styleUrl: './modal-sign-in.component.css'
})
export class ModalSignInComponent {
  @Input() mostrar: boolean = false;
 
  constructor(private router: Router) {
  }

  open(mostrar: boolean) {
    this.mostrar = mostrar;
  }

  close() {
    this.mostrar = false;
  }

  navigateToLogin() {
    this.router.navigate(['/Login']);
    this.close();
  }
}
