import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../../../app/services/country.service';
import { Router } from '@angular/router';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {

  @ViewChild(ModalSignInComponent) modalSignIn!: ModalSignInComponent; // Referencia al modal

  datos: any[] = [];
  mostrar: boolean = false;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (res) => {
        this.datos = res;
        console.log('Datos cargados:', this.datos);
      },
      (err) => {
        console.error('Error al cargar los datos:', err);
      }
    );
  }

  Next() {

  }

   // Método para verificar si el usuario está logueado
   isUserLoggedIn(): boolean {
    // Aquí puedes implementar tu lógica de autenticación
    // Por ejemplo, verificar si existe un token en localStorage
    const token = localStorage.getItem('authToken');
    return !!token; // Retorna true si existe el token, false si no
    // O si usas un servicio de autenticación:
    // return this.authService.isAuthenticated();
  }

  Report(): void {
    if (this.isUserLoggedIn()) {
      // Usuario logueado: redirigir a la pantalla add-report
      this.router.navigate(['/add-report']);
    } else {
      // Usuario no logueado: mostrar modal
      this.ShowModal();
    }
  }

  ShowModal(){
    this.mostrar = true;
    this.modalSignIn.open(this.mostrar);
  }
}