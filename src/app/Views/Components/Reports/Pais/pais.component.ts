import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../../../app/services/country.service'; 

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  datos: any[] = [];

  constructor(private countryService: CountryService) {}

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

  cambiarTitulo() {

  }
}
