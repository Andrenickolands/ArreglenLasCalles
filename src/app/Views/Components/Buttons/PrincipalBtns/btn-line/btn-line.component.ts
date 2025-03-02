import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-line',
  imports: [],
  templateUrl: './btn-line.component.html',
  styleUrl: './btn-line.component.css'
})
export class BtnLineComponent {
  @Input() text: string = 'Botón';
}
