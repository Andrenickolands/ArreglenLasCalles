import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-green',
  imports: [],
  templateUrl: './btn-green.component.html',
  styleUrl: './btn-green.component.css'
})
export class BtnGreenComponent {
  @Input() text: string = 'Botón';
}
