import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrysService } from '../../../../services/country.service';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  datos: any = {};

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