
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { InptPrincipalComponent } from '../../Components/Inputs/inpt-principal/inpt-principal.component';
import { InptDateComponent } from '../../Components/Inputs/inpt-date/inpt-date.component';
import { InptEmailComponent } from '../../Components/Inputs/inpt-email/inpt-email.component';
import { InptPasswordComponent } from '../../Components/Inputs/inpt-password/inpt-password.component';



@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, /*InptPrincipalComponent, InptDateComponent, InptEmailComponent, InptPasswordComponent */],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  showErrors: boolean = false;

  signUpUserForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    country: new FormControl(''),
    birthdate: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
  });

  constructor(formBuilder: FormBuilder, private router: Router) {

    this.signUpUserForm = formBuilder.group({
      name: ["", Validators.required, CustomValidators.onlyLetters],
      email: ["", Validators.required, Validators.email],
      country: ["", Validators.required, CustomValidators.onlyLetters],
      birthdate: ["", Validators.required],
      password: ["", Validators.required, Validators.minLength(8), CustomValidators.passw],
      passwordConfirm: ["", Validators.required, CustomValidators.mustBeEqual('password', 'passwordConfirm')],
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

      const user = {
        iduser: 0,
        name: this.signUpUserForm.get('name')?.value,
        email: this.signUpUserForm.get('email')?.value,
        country: this.signUpUserForm.get('country')?.value,
        birthdate: this.signUpUserForm.get('birthdate')?.value,
        password: this.signUpUserForm.get('password')?.value,
        passwordConfirm: this.signUpUserForm.get('passwordConfirm')?.value,
      }

      console.log('persona');
      console.log(user);

      console.log('form');
      console.log(this.signUpUserForm);

      this.router.navigate(['/Acept-terms', user.iduser, user.name, user.email, user.country, user.birthdate, user.password, user.passwordConfirm, user.email]); 

    } else {
      this.showErrors = true;
      return;
    }

  }

}