import { Component } from '@angular/core';
import { HeaderSesionComponent } from "../../Components/Header/Header-sesion/header-sesion.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-report',
  standalone: true,
  imports: [HeaderSesionComponent, CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
