import { Component, OnInit } from '@angular/core';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { CityService } from '../../../../services/city.service';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {

  datos: any[] = [];

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
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

}
