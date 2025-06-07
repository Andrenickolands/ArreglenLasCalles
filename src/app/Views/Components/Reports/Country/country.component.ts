import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../../services/country.service';
import { CityService } from '../../../../services/city.service';
import { Router } from '@angular/router';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  @ViewChild(ModalSignInComponent) modalLogin!: ModalSignInComponent;

  datos: any[] = [];
  selectedCountry: any = null;
  selectedCity: any = null;
  NumReportsCountry: number = 0;
  NumReportsCity: number = 0;

  filtered: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  searchTerm: string = '';

  constructor(private countryService: CountryService, private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.loadAllCountries();
      this.loadAllCities();
    }, 30000);
  }

  // Cargar todos los países
  loadAllCountries(): void {
    this.loading = true;
    this.error = false;

    this.countryService.getCountries().subscribe(
      (res) => {
        this.datos = res;
        this.filtered = [...this.datos];
        this.loading = false;
        this.NumReportsCountry = res.length; // Agregar esta línea
        console.log('Datos cargados:', this.datos);
        console.log('Total de localidades:', this.NumReportsCountry);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Método para obtener un país específico por ID
  getCountryById(countryId: number | string): void {
    this.loading = true;
    this.error = false;

    this.countryService.getCountryById(countryId).subscribe(
      (res) => {
        this.selectedCountry = res;
        this.loading = false;
        console.log('País obtenido por ID:', this.selectedCountry);
      },
      (err) => {
        console.error('Error al obtener el país por ID:', err);
        this.error = true;
        this.loading = false;
      }
    );
  }

  // Cargar todos los datos
  loadAllCities(): void {
    this.loading = true;
    this.error = false;

    this.cityService.getCities().subscribe(
      (res) => {
        this.datos = res;
        this.filtered = [...this.datos];
        this.loading = false;
        this.NumReportsCity = res.length; // Agregar esta línea
        console.log('Datos cargados:', this.datos);
        console.log('Total de localidades:', this.NumReportsCity);
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

  // Seleccionar
  select(country: any): void {
    console.log('Dato seleccionado:', country);
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
    this.filtered = this.datos.filter(country =>
      country.name?.toLowerCase().includes(term) ||
      country.capital?.toLowerCase().includes(term) ||
      country.region?.toLowerCase().includes(term) ||
      country.code?.toLowerCase().includes(term)
    );
  }

  // TrackBy function para optimizar rendimiento del *ngFor
  trackByInfo(index: number, country: any): any {
    return country.id || country.name || index;
  }

  // Limpiar búsqueda
  clearSearch(): void {
    this.searchTerm = '';
    this.filtered = [...this.datos];
  }

  // Reintentar carga
  retry(): void {
    this.loadAllCountries();
    this.loadAllCities();
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


  //  <div class="search-container" >
  //   <input type="text" class="search-input" placeholder = "Buscar país..." [(ngModel)] = "searchTerm" (keyup) = "filterCountries()">
  //  </div>
}