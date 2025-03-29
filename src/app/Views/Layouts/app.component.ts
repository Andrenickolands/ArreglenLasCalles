import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: '../../../styles.css'
})
export class AppComponent {
  title = 'ArreglenLasCalles';
}