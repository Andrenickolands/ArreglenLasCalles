import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/Footer/footer.component";
import { HeaderComponent } from "../../Components/Header/header.component";

@Component({
  selector: 'app-dashboard',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
