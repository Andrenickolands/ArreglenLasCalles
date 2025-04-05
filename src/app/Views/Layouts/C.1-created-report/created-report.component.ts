import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { CommonModule } from '@angular/common';
import { HeaderSesionComponent } from '../../Components/Header/Header-sesion/header-sesion.component';

@Component({
  selector: 'app-created-report',
  imports: [CommonModule, ReactiveFormsModule, HeaderSesionComponent],
  templateUrl: './created-report.component.html',
  styleUrl: './created-report.component.css'
})
export class CreatedReportComponent implements OnInit {
  form: FormGroup;
  showErrors: boolean = false;

  constructor(formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      direction: ["", Validators.required],
      neighborhood: ["", Validators.required],
      sector: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      dateReport: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    this.form.markAllAsTouched();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  Vote() {
   
  }

}
