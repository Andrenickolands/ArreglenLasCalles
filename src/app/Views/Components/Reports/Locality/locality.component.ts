import { Component, OnInit } from '@angular/core';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { LocalityService } from '../../../../services/locality.service';

@Component({
  selector: 'app-locality',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './locality.component.html',
  styleUrl: './locality.component.css'
})
export class LocalityComponent implements OnInit {

  datos: any[] = [];

  constructor(private localityService: LocalityService, private router: Router) { }

  ngOnInit(): void {
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

}
