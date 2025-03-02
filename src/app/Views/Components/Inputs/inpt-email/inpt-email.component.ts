import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inpt-email',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inpt-email.component.html',
  styleUrl: './inpt-email.component.css'
})
export class InptEmailComponent {
        @Input() placeholder: string = 'Escribe aquí...'; // Placeholder por defecto
        @Input() control!: FormControl; // FormControl que viene del formulario
        @Input() formControlName?: string;
        @Input() id: string = '';

}
