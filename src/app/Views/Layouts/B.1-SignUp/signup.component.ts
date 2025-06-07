import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpUserForm: FormGroup;
  showErrors: boolean = false;
  inputType: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {
    this.signUpUserForm = this.formBuilder.group({
      name: ['', [Validators.required, CustomValidators.onlyLetters]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required, CustomValidators.onlyLetters]],
      birthdate: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8), CustomValidators.passw]],
      passwordConfirm: ['', [Validators.required, CustomValidators.mustBeEqual('newPassword', 'passwordConfirm')]]
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.signUpUserForm.markAllAsTouched();
    this.signUp();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signUpUserForm.get(fieldName);
    return field ? field.invalid && (field.dirty || field.touched) : false;
  }

  togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  signUp() {
    if (this.signUpUserForm.valid) {
      this.showErrors = false;

      const user = {
        nombre: this.signUpUserForm.get('name')?.value,
        email: this.signUpUserForm.get('email')?.value,
        pais: this.signUpUserForm.get('country')?.value,
        nacimiento: this.signUpUserForm.get('birthdate')?.value,
        password: this.signUpUserForm.get('newPassword')?.value,
      };

      this.usersService.registerUser(user).subscribe({
        next: () => {
          alert('Usuario registrado con éxito');
          this.router.navigate(['/Acept-terms']);
        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          alert('Hubo un error al registrar el usuario');
        }
      });
    } else {
      this.showErrors = true;
    }
  }
}
