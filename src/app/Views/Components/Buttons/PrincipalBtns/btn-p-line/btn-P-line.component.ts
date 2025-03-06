import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-p-line',
  imports: [],
  templateUrl: './btn-P-line.component.html',
  styleUrl: './btn-P-line.component.css'
})
export class BtnPLineComponent {
  @Input() text: string = 'Botón';
}
