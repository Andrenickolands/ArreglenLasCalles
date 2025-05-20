import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from '../../../app/services/country.service'; // Asegúrate de que la ruta sea correcta
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule], // Agrega HttpClientModule a los imports
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  providers: [CountryService] // Asegúrate de que tu servicio esté en providers si es standalone
})
export class AppComponent implements OnInit {
  title = 'Arreglenlascalles';
  countries: any[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error al obtener los países', error);
      }
    );
  }
}