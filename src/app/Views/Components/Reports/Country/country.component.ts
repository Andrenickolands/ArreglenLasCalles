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

 constructor(private router: Router) {}

goToReport() {
  this.router.navigate(['/Create-report']);
}
  ngOnInit(): void {
    console.log('AppComponent inicializado 🚀');
  }


}