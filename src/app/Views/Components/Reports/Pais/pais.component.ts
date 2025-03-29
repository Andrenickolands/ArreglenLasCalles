import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrysService } from '../../../../services/country.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {
  datos: any = {};
=======
export class PaisComponent {
  constructor(){

  }

  NavigateToAddReport() {
    
  }
>>>>>>> 7a57fe3962866eca2a8be9348e7e9ba64b908bde

  constructor(private countrysService: CountrysService) {}

  ngOnInit(): void {
    this.countrysService.getDatos().subscribe({
      next: (response) => {
        console.log('Datos obtenidos correctamente', response);
        this.datos = Array.isArray(response) ? response[0] : response;
      },
      error: (err) => console.error('Error al mostrar campos', err)
    });
  }
}