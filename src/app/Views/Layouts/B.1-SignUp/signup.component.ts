
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { User } from '../../../Models/User';
import { InptPrincipalComponent } from '../../Components/Inputs/inpt-principal/inpt-principal.component';



@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule, InptPrincipalComponent],
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
    aceptTyCUser: new FormControl(''),
  });

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
}

//   submitForm() {
//     this.signUpUserForm.markAllAsTouched();
//     this.signUp();
//   }

//   signUp() {

//     if (this.signUpUserForm.valid) {

//       this.showErrors = false;

//       console.log('usuario creado');

//       const user: User = {
//         iduser: 0,
//         name: this.signUpUserForm.get('name')?.value,
//         email: this.signUpUserForm.get('email')?.value,
//         country: this.signUpUserForm.get('country')?.value,
//         birthdate: this.signUpUserForm.get('birthdate')?.value,
//         password: this.signUpUserForm.get('password')?.value,
//         passwordConfirm: this.signUpUserForm.get('passwordConfirm')?.value,
//         aceptTyCUser: this.signUpUserForm.get('aceptTyCUser')?.value
//       }

//       console.log('persona');
//       console.log(user);

//       console.log('form');
//       console.log(this.signUpUserForm);

//       this.router.navigateByUrl('/Acept-terms');

//     } else {
//       this.showErrors = true;
//       return;
//     }

//   }

// }