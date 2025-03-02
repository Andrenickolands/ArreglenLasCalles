import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-s-line',
  imports: [],
  templateUrl: './btn-s-line.component.html',
  styleUrl: './btn-s-line.component.css'
})
export class BtnSLineComponent {
  @Input() text: string = 'Botón';
}
