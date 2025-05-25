import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CityService } from '../../../../services/city.service';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  
  @ViewChild(ModalSignInComponent) modalLogin!: ModalSignInComponent;

  datos: any[] = [];
  selectedCity: any = null;

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllCities();
  }

  // Cargar todos los datos
  loadAllCities(): void {
    this.cityService.getCities().subscribe(
      (res) => {
        this.datos = res;
        console.log('Datos cargados:', this.datos);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
      }
    );
  }

  // Método para obtener una ciudad específica por ID
  getCityByID(cityId: number | string): void {
    this.cityService.getCityByID(cityId).subscribe(
      (res) => {
        this.selectedCity = res;
        console.log('Ciudad obtenida por ID:', this.selectedCity);
      },
      (err) => {
        console.error('Error al obtener el ciudad por ID:', err);
      }
    );
  }

  Next() {

  }

  // Método para verificar si el usuario está logueado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  Report(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/add-report']);
    } else {
      this.modalLogin.open();
    }
  }

}
