import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-report.html',
  styleUrl: './modal-report.css'
})
export class ModalReport {
  
  protected mostrar: boolean = false;

  constructor(private router: Router) {}

  open(): void {
    this.mostrar = true;
  }

  close(): void {
    this.mostrar = false;
  }

  navigateToHome() {
    this.router.navigate(['/Home']);
    this.close();
  }

}
