import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-photo.html',
  styleUrl: './modal-photo.css'
})
export class ModalPhoto {

  protected mostrar: boolean = false;

  constructor() { }

  open(): void {
    this.mostrar = true;
  }

  close(): void {
    this.mostrar = false;
  }

  UploadPhoto() {

    this.close();
  }

  TakePhoto() {

    this.close();
  }

}
