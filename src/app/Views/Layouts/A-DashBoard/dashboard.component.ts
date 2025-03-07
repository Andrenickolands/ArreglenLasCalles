import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/Footer/footer.component";
import { PaisComponent } from "../../Components/Reports/Pais/pais.component";
import { HeaderDashboardComponent } from "../../Components/Header/Header-dashboard/header-dashboard.component";

@Component({
  selector: 'app-dashboard',
  imports: [FooterComponent, PaisComponent, HeaderDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
