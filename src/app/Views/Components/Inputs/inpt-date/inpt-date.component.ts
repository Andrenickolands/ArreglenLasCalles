import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inpt-date',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inpt-date.component.html',
  styleUrl: './inpt-date.component.css'
})
export class InptDateComponent {
      @Input() placeholder: string = 'Escribe aquí...'; // Placeholder por defecto
      @Input() control!: FormControl; // FormControl que viene del formulario
      @Input() formControlName?: string;
      @Input() id: string = '';
}
