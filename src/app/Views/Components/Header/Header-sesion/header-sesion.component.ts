import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../../app/services/aut.service';

@Component({
  selector: 'app-header-sesion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-sesion.component.html',
  styleUrl: './header-sesion.component.css'
})
export class HeaderSesionComponent implements OnInit {
  isMenuOpen = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateToInicio() {
    this.router.navigate(['/Home']);
  }

  navigateToReports() {
    this.router.navigate(['/Reports']);
  }

  navigateToProfile() {
    this.router.navigate(['/Profile']);
  }

  navigateToAyuda() {
    this.router.navigate(['/Help']);
  }

  Donate() {}

  LogOut() {
  this.authService.logout();
  this.router.navigate(['/Login']);
}
}
