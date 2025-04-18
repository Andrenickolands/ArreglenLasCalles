import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-search',
  imports: [CommonModule, RouterModule],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.css'
})
export class HeaderSearchComponent implements OnInit {
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
    this.router.navigate(['/Login']);
  }

}
