import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LocalityService } from '../../../../services/locality.service';

@Component({
  selector: 'app-locality',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './locality.component.html',
  styleUrl: './locality.component.css'
})
export class LocalityComponent implements OnInit {

  @ViewChild(ModalSignInComponent) modalLogin!: ModalSignInComponent;

  datos: any[] = [];
  selectedLocality: any = null;

  constructor(private localityService: LocalityService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllLocalities();
  }

  // Cargar todos los datos
  loadAllLocalities(): void {
    this.localityService.getLocalities().subscribe(
      (res) => {
        this.datos = res;
        console.log('Datos cargados:', this.datos);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
      }
    );
  }

  // Método para obtener una localidad específica por ID
  getLocalityByID(localityId: number | string): void {
    this.localityService.getLocalityByID(localityId).subscribe(
      (res) => {
        this.selectedLocality = res;
        console.log('localidad obtenida por ID:', this.selectedLocality);
      },
      (err) => {
        console.error('Error al obtener el localidad por ID:', err);
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
