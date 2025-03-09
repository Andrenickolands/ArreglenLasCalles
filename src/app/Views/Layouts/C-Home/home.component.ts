import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/Footer/footer.component";
import { HeaderSesionComponent } from "../../Components/Header/Header-sesion/header-sesion.component";
import { PaisComponent } from "../../Components/Reports/Pais/pais.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, HeaderSesionComponent, PaisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
