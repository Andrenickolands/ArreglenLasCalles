import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-p-principal',
  imports: [],
  templateUrl: './btn-p-principal.component.html',
  styleUrl: './btn-p-principal.component.css'
})
export class BtnPPrincipalComponent {
  @Input() text: string = 'Botón';
}
