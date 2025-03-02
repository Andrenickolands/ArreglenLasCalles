import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inpt-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inpt-search.component.html',
  styleUrl: './inpt-search.component.css'
})
export class InptSearchComponent {
    @Input() placeholder: string = 'Escribe aquí...'; // Placeholder por defecto
    @Input() control!: FormControl; // FormControl que viene del formulario
    @Input() formControlName?: string;
    @Input() id: string = '';
}
