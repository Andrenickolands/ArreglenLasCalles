import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-acept-terms',
  imports: [],
  templateUrl: './acept-terms.component.html',
  styleUrl: './acept-terms.component.css'
})
export class AceptTermsComponent implements OnInit {
  signUpUserForm: FormGroup;
  showErrors: boolean = false;

  constructor(formBuilder: FormBuilder, private router: Router) {

    this.signUpUserForm = formBuilder.group({
      name: ["", Validators.required, CustomValidators.onlyLetters],
      email: ["", Validators.required, Validators.email],
      country: ["", Validators.required, CustomValidators.onlyLetters],
      birthdate: ["", Validators.required],
      password: ["", Validators.required, Validators.minLength(8), CustomValidators.passw],
      passwordConfirm: ["", Validators.required, CustomValidators.mustBeEqual('password', 'passwordConfirm')],
      aceptTyCUser: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    this.signUpUserForm.markAllAsTouched();
    this.signUp();
  }

  signUp() {

    if (this.signUpUserForm.valid) {

      this.showErrors = false;

      console.log('usuario creado');

      const user: User = {
        iduser: 0,
        name: this.signUpUserForm.get('name')?.value,
        email: this.signUpUserForm.get('email')?.value,
        country: this.signUpUserForm.get('country')?.value,
        birthdate: this.signUpUserForm.get('birthdate')?.value,
        password: this.signUpUserForm.get('password')?.value,
        passwordConfirm: this.signUpUserForm.get('passwordConfirm')?.value,
        aceptTyCUser: this.signUpUserForm.get('aceptTyCUser')?.value
      }

      console.log('persona');
      console.log(user);

      console.log('form');
      console.log(this.signUpUserForm);

      this.router.navigateByUrl('/Acept-terms');

    } else {
      this.showErrors = true;
      return;
    }

  }




}