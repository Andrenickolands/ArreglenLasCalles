import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderSesionComponent } from "../../Components/Header/Header-sesion/header-sesion.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { ModalPhoto } from "../../Components/Modals/ModalPhoto/modal-photo";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderSesionComponent, CommonModule, ReactiveFormsModule, ModalPhoto],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  @ViewChild(ModalPhoto) modalPhoto!: ModalPhoto;
  ProfileForm: FormGroup;
  showErrors: boolean = false;

  constructor(formBuilder: FormBuilder, private router: Router) {

    this.ProfileForm = formBuilder.group({
      name: ["", Validators.required, CustomValidators.onlyLetters],
      email: ["", Validators.required, Validators.email],
      country: ["", Validators.required, CustomValidators.onlyLetters],
      birthdate: ["", Validators.required],
      password: ["", Validators.required, Validators.minLength(8), CustomValidators.passw],
      passwordConfirm: ["", Validators.required, CustomValidators.mustBeEqual('password', 'passwordConfirm')],
    })
  }

  ngOnInit(): void {
  
  }

  submitForm() {
    this.ProfileForm.markAllAsTouched();
    this.putUser();
  }

  Photo() {
    this.modalPhoto.open();
  }

  putUser() {
    if (this.ProfileForm.valid) {

      this.showErrors = false;

      console.log('Parametros enviados');

      const user = {
        id: 0,
        name: this.ProfileForm.get('name')?.value,
        email: this.ProfileForm.get('email')?.value,
        country: this.ProfileForm.get('country')?.value,
        birthdate: this.ProfileForm.get('birthdate')?.value,
        password: this.ProfileForm.get('password')?.value,
        passwordConfirm: this.ProfileForm.get('passwordConfirm')?.value,
      }

      console.log('persona');
      console.log(user);

      console.log('form');
      console.log(this.ProfileForm);

      this.router.navigate(['/Acept-terms']); 

    } else {
      this.showErrors = true;
      return;
    }

  }

}
