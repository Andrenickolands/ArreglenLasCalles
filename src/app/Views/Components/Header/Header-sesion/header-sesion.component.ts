import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-sesion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-sesion.component.html',
  styleUrl: './header-sesion.component.css'
})
export class HeaderSesionComponent implements OnInit {
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

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

  Donate(){

  }

  LogOut(){
    this.router.navigate(['/Dashboard']);
  }
}
