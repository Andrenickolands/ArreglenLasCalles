import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inpt-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inpt-password.component.html',
  styleUrl: './inpt-password.component.css'
})
export class InptPasswordComponent {
      @Input() placeholder: string = 'Escribe aquí...'; // Placeholder por defecto
      @Input() control!: FormControl; // FormControl que viene del formulario
      @Input() formControlName?: string;
      @Input() id: string = '';
}
