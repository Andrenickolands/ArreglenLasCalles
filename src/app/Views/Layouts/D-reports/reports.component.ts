import { Component } from '@angular/core';
import { HeaderSesionComponent } from '../../Components/Header/Header-sesion/header-sesion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [HeaderSesionComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  public titulo = 'Países';
  public subtitulo = 'País';
  private titulosIndex = 0;
  private titulos = ['Países', 'Ciudades', 'Barrios'];
  private subtitulos = ['País', 'Ciudad', 'Barrio'];
  
  cambiarTitulo() {
    this.titulosIndex = (this.titulosIndex + 1) % this.titulos.length;
    this.titulo = this.titulos[this.titulosIndex];
    this.subtitulo = this.titulos[this.titulosIndex];
  }
}
