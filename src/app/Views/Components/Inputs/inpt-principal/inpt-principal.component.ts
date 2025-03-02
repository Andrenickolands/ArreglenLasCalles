import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inpt-principal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inpt-principal.component.html',
  styleUrl: './inpt-principal.component.css'
})
export class InptPrincipalComponent {
  @Input() placeholder: string = 'Escribe aquí...'; // Placeholder por defecto
  @Input() control!: FormControl; // FormControl que viene del formulario
  @Input() formControlName?: string;
  @Input() id: string = '';
}
