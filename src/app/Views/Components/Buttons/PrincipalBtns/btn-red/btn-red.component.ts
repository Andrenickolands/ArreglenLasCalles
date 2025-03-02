import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-red',
  imports: [],
  templateUrl: './btn-red.component.html',
  styleUrl: './btn-red.component.css'
})
export class BtnRedComponent {
  @Input() text: string = 'Botón';
}
