import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-s',
  imports: [],
  templateUrl: './btn-s.component.html',
  styleUrl: './btn-s.component.css'
})
export class BtnSComponent {
  @Input() text: string = 'Botón';
}
