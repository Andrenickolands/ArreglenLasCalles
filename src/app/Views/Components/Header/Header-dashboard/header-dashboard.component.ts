import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-dashboard',
  imports: [],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.css'
})
export class HeaderDashboardComponent {

   constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/Login']);
  }

  navigateToReports() {
    this.router.navigate(['/Reports']);
  }

  navigateToInicio() {
    this.router.navigate(['/Dashboard']);
  }

  navigateToAyuda() {
    this.router.navigate(['/Help']);
  }
}
