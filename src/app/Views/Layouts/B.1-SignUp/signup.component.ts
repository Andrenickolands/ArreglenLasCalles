import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent implements OnInit {
  signUpUserForm: FormGroup;
  showErrors: boolean = false;
  inputType: string = 'password';

  constructor(formBuilder: FormBuilder, private router: Router) {

    this.signUpUserForm = formBuilder.group({
      name: ["", Validators.required, CustomValidators.onlyLetters],
      email: ["", Validators.required, Validators.email],
      country: ["", Validators.required, CustomValidators.onlyLetters],
      birthdate: ["", Validators.required],
      newPassword: ["", Validators.required, Validators.minLength(8), CustomValidators.passw],
      passwordConfirm: ["", Validators.required, CustomValidators.mustBeEqual('newPassword', 'passwordConfirm')],
    })
  }

  ngOnInit(): void {

  }


  submitForm() {
    this.signUpUserForm.markAllAsTouched();
    this.signUp();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signUpUserForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  signUp() {

    if (this.signUpUserForm.valid) {

      this.showErrors = false;

      console.log('Parametros enviados');

      const user = {
        id: 0,
        name: this.signUpUserForm.get('name')?.value,
        email: this.signUpUserForm.get('email')?.value,
        country: this.signUpUserForm.get('country')?.value,
        birthdate: this.signUpUserForm.get('birthdate')?.value,
        newPassword: this.signUpUserForm.get('newPassword')?.value,
        passwordConfirm: this.signUpUserForm.get('passwordConfirm')?.value,
      }

      console.log('persona');
      console.log(user);

      console.log('form');
      console.log(this.signUpUserForm);

      this.router.navigate(['/Acept-terms', user.id, user.name, user.email, user.country, user.birthdate, user.newPassword, user.passwordConfirm, user.email]);

    } else {
      this.showErrors = true;
      return;
    }

  }

}