import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-principal',
  imports: [],
  templateUrl: './btn-principal.component.html',
  styleUrl: './btn-principal.component.css'
})
export class BtnPrincipalComponent {
  @Input() text: string = 'Botón';
}
