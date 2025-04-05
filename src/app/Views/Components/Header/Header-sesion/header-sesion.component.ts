import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-sesion',
  imports: [CommonModule],
  templateUrl: './header-sesion.component.html',
  styleUrl: './header-sesion.component.css'
})
export class HeaderSesionComponent implements OnInit {
  isMenuOpen = false;

  ngOnInit(): void {
  }

  toggleMenu() {
    console.log('Estado anterior:', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Nuevo estado:', this.isMenuOpen);
  }

  Start(){

  }

  WatchReports(){
    
  }

  Profile(){

  }

  Help(){
    
  }

  Donate(){

  }

  LogOut(){
    
  }

}
