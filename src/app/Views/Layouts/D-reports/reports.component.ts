import { Component } from '@angular/core';
import { HeaderSesionComponent } from '../../Components/Header/Header-sesion/header-sesion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  imports: [HeaderSesionComponent, CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

}
