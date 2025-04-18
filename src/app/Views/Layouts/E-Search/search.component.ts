import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeaderSearchComponent } from "../../Components/Header/Header-search/header-search.component";

@Component({
  selector: 'app-search',
  imports: [HeaderSearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  mapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.326118062753!2d-74.11876906570242!3d4.6540410747946135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b8e3f0b6cd7%3A0x2751387a49099904!2sCiudad%20Salitre%2C%20Teusaquillo%2C%20Bogot%C3%A1%2C%20Bogota!5e0!3m2!1sen!2sco!4v1698713434561!5m2!1sen!2sco';

  safeMapUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }
}
