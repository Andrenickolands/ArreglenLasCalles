import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CityService } from '../../../../services/city.service';
import { LocalityService } from '../../../../services/locality.service';
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
  selectedLocality: any = null;
  NumReportsCity: number = 0;
  NumReportsLocality: number = 0;

  filtered: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  searchTerm: string = '';

  constructor(private cityService: CityService, private localityService: LocalityService, private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loadAllCities();
      this.loadAllLocalities();
    }, 30000);
  }

  // Cargar todos los datos
  loadAllCities(): void {
    this.loading = true;
    this.error = false;

    this.cityService.getCities().subscribe(
      (res) => {
        this.datos = res;
        this.loading = false;
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Método para obtener una ciudad específica por ID
  getCityByID(cityId: number | string): void {
    this.loading = true;
    this.error = false;

    this.cityService.getCityByID(cityId).subscribe(
      (res) => {
        this.selectedCity = res;
        this.loading = false;
        console.log('Ciudad obtenida por ID:', this.selectedCity);
      },
      (err) => {
        console.error('Error al obtener el ciudad por ID:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Cargar todos los datos
  loadAllLocalities(): void {
    this.loading = true;
    this.error = false;

    this.localityService.getLocalities().subscribe(
      (res) => {
        this.datos = res;
        this.filtered = [...this.datos];
        this.loading = false;
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Método para obtener una localidad específica por ID
  getLocalityByID(localityId: number | string): void {
    this.loading = true;
    this.error = false;

    this.localityService.getLocalityByID(localityId).subscribe(
      (res) => {
        this.selectedLocality = res;
        this.loading = false;
        console.log('localidad obtenida por ID:', this.selectedLocality);
      },
      (err) => {
        console.error('Error al obtener el localidad por ID:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Seleccionar
  select(dato: any): void {
    console.log('Dato seleccionado:', dato);
    // Aquí puedes navegar a otra página o mostrar detalles
    // this.router.navigate(['/country-details', country.id]);
  }

  // Filtrar (búsqueda en tiempo real)
  filter(): void {
    if (!this.searchTerm.trim()) {
      this.filtered = [...this.datos];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filtered = this.datos.filter(dato =>
      dato.name?.toLowerCase().includes(term) ||
      dato.capital?.toLowerCase().includes(term) ||
      dato.region?.toLowerCase().includes(term) ||
      dato.code?.toLowerCase().includes(term)
    );
  }

  // TrackBy function para optimizar rendimiento del *ngFor
  trackByInfo(index: number, dato: any): any {
    return dato.id || dato.name || index;
  }

  // Limpiar búsqueda
  clearSearch(): void {
    this.searchTerm = '';
    this.filtered = [...this.datos];
  }

  // Reintentar carga
  retry(): void {
    this.loadAllCities();
    this.loadAllLocalities();
  }

  // Método para obtener el token del localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para verificar si el usuario está logueado
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  Report(): void {
    if (this.isAuthenticated()) {
      this.router.navigate(['/add-report']);
    } else {
      this.modalLogin.open();
    }
  }

}
