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

  constructor(private neighborhoodService: NeighborhoodService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllNeighborhoods();
  }

  // Cargar todos los datos
  loadAllNeighborhoods(): void {
    this.neighborhoodService.getNeighborhoods().subscribe(
      (res) => {
        this.datos = res;
        console.log('Datos cargados:', this.datos);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
      }
    );
  }

  // Método para obtener un barrio específico por ID
  getNeighborhoodById(neighborhoodId: number | string): void {
    this.neighborhoodService.getNeighborhoodByID(neighborhoodId).subscribe(
      (res) => {
        this.selectedNeighborhood = res;
        console.log('barrio obtenida por ID:', this.selectedNeighborhood);
      },
      (err) => {
        console.error('Error al obtener el barrio por ID:', err);
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
