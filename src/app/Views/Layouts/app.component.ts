import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Asegúrate de que la ruta sea correcta
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], // Agrega HttpClientModule a los imports
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('AppComponent inicializado 🚀');
  }
}