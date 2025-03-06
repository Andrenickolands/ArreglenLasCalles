import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-p-red',
  imports: [],
  templateUrl: './btn-p-red.component.html',
  styleUrl: './btn-p-red.component.css'
})
export class BtnPRedComponent {
  @Input() text: string = 'Botón';
}
