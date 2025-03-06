import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-p-green',
  imports: [],
  templateUrl: './btn-P-green.component.html',
  styleUrl: './btn-P-green.component.css'
})
export class BtnPGreenComponent {
  @Input() text: string = 'Botón';
}
