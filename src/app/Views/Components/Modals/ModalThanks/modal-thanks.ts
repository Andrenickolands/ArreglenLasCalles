import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-thanks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-thanks.html',
  styleUrl: './modal-thanks.css'
})
export class ModalThanks {

  protected mostrar: boolean = false;

  constructor() { }

  open(): void {
    this.mostrar = true;
  }

  close(): void {
    this.mostrar = false;
  }

  Donar() {

    this.close();
  }

}
