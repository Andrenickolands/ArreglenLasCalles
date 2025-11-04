import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomValidators } from '../../../../Communs/Custom-validators';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpUserForm: FormGroup;
  showErrors: boolean = false;
  inputType: string = 'password';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
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

      // Llamada al backend (Node.js)
      this.http.post('http://localhost:3000/api/register', user).subscribe({
        next: (res: any) => {
          this.successMessage = 'Usuario registrado correctamente ✅';
          this.errorMessage = '';
          console.log('Respuesta del servidor:', res);

          // Opcional: redirigir después de unos segundos
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: (err) => {
          console.error('Error al registrar usuario:', err);
          this.errorMessage = 'Ocurrió un error al registrar el usuario.';
        }
      });

    } else {
      this.showErrors = true;
      Object.keys(this.signUpUserForm.controls).forEach(field => {
        const control = this.signUpUserForm.get(field);
        control?.markAsTouched();
      });
    }
  }
}
