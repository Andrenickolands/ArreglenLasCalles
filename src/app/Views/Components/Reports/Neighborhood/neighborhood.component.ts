import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';
import { Router } from '@angular/router';
import { NeighborhoodService } from '../../../../services/neighborhood.service';

@Component({
  selector: 'app-neighborhood',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './neighborhood.component.html',
  styleUrl: './neighborhood.component.css'
})
export class NeighborhoodComponent implements OnInit {

  @ViewChild(ModalSignInComponent) modalLogin!: ModalSignInComponent;

  datos: any[] = [];
  selectedNeighborhood: any = null;
  selectedReport: any = null;
  NumReportsNeighborhood: number = 0;

  filtered: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  searchTerm: string = '';

  constructor(private neighborhoodService: NeighborhoodService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllNeighborhoods();
    this.loadReportCountsToNeighborhoods();

    setInterval(() => {
      this.loadAllNeighborhoods();
      this.loadReportCountsToNeighborhoods();
    }, 30000);
  }

   //Numero de reporte por barrio
  loadReportCountsToNeighborhoods(): void {
    this.neighborhoodService.getNumOfReportsByNeighborhood().subscribe(
      (res) => {
        this.NumReportsNeighborhood = res.count;
      },
      (err) => {
        console.error('Error al cargar el conteo de reportes del barrio:', err);
      }
    );
  }

  // Cargar todos los datos
  loadAllNeighborhoods(): void {
    this.loading = true;
    this.error = false;

    this.neighborhoodService.getNeighborhoods().subscribe(
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

  // Método para obtener un barrio específico por ID
  getNeighborhoodById(neighborhoodId: number | string): void {
    this.loading = true;
    this.error = false;

    this.neighborhoodService.getNeighborhoodByID(neighborhoodId).subscribe(
      (res) => {
        this.selectedNeighborhood = res;
        this.loading = false;
        console.log('barrio obtenida por ID:', this.selectedNeighborhood);
      },
      (err) => {
        console.error('Error al obtener el barrio por ID:', err);
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
    this.loadAllNeighborhoods();
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
