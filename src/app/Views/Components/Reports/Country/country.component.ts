import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalSignInComponent } from '../../Modals/ModalLogin/modal-sign-in.component';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, ModalSignInComponent],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('AppComponent inicializado 🚀');
  }


  //  <div class="search-container" >
  //   <input type="text" class="search-input" placeholder = "Buscar país..." [(ngModel)] = "searchTerm" (keyup) = "filterCountries()">
  //  </div>
}