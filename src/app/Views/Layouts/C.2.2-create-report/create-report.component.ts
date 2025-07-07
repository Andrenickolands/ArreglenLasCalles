import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from "../../Components/Footer/footer.component";
import { HeaderSesionComponent } from '../../Components/Header/Header-sesion/header-sesion.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalReport } from "../../Components/Modals/ModalReport/modal-report";
import { ModalPhoto } from "../../Components/Modals/ModalPhoto/modal-photo";

@Component({
  selector: 'app-create-report',
  standalone: true,
  imports: [FooterComponent, HeaderSesionComponent, ReactiveFormsModule, CommonModule, ModalReport, ModalPhoto],
  templateUrl: './create-report.component.html',
  styleUrl: './create-report.component.css'
})
export class CreateReportComponent implements OnInit {
  @ViewChild(ModalPhoto) modalPhoto!: ModalPhoto;
  @ViewChild(ModalReport) modalReport!: ModalReport;
  form: FormGroup;
  showErrors: boolean = false;
  mapUrl: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.326118062753!2d-74.11876906570242!3d4.6540410747946135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b8e3f0b6cd7%3A0x2751387a49099904!2sCiudad%20Salitre%2C%20Teusaquillo%2C%20Bogot%C3%A1%2C%20Bogota!5e0!3m2!1sen!2sco!4v1698713434561!5m2!1sen!2sco';
  safeMapUrl!: SafeResourceUrl;

  constructor(formBuilder: FormBuilder, private sanitizer: DomSanitizer) {

    this.form = formBuilder.group({
      direction: ["", Validators.required],
      neighborhood: ["", Validators.required],
      sector: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
    })
  }

  ngOnInit() {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  submitForm() {
    this.form.markAllAsTouched();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  Report() {
    this.modalReport.open();
  }

  Photo() {
    this.modalPhoto.open();
  }

}
