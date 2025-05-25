import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';
import { Router } from 'express';
import { NeighborhoodService } from '../../../../services/neighborhood.service';

@Component({
  selector: 'app-neighborhood',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './neighborhood.component.html',
  styleUrl: './neighborhood.component.css'
})
export class NeighborhoodComponent implements OnInit {

  datos: any[] = [];

  constructor(private neighborhoodService: NeighborhoodService, private router: Router) { }

  ngOnInit(): void {
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

}
