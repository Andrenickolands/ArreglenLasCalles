import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/Footer/footer.component";
import { HeaderDashboardComponent } from "../../Components/Header/Header-dashboard/header-dashboard.component";

@Component({
  selector: 'app-create-report',
  imports: [FooterComponent, HeaderDashboardComponent],
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.css'
})
export class CreateReportComponent {

}
