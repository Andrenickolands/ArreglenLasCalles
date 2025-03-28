import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { userLogin } from '../../../Models/Login';
import { CustomValidators } from '../../../../Communs/Custom-validators';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' //['./login.component.css', '../../../styles.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('input') inputField!: ElementRef<HTMLInputElement>;
  @ViewChild('input_icon') inputIcon!: ElementRef<HTMLImageElement>;

  inputType: string = 'password';
  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), CustomValidators.passw]],
    });
  }

  ngOnInit(): void {
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Aquí puedes agregar la lógica de inicio de sesión
      console.log('logeado');

      const user: userLogin = {
        id: 0,
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }

      console.log('Username');
      console.log(user);

      console.log('form');
      console.log(this.loginForm);

      this.router.navigateByUrl('/Home');
      this.loginForm.reset();

      // Por ejemplo, this.router.navigate(['/dashboard']);
    } else {
      // Marcar todos los campos como tocados para mostrar errores de validación
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control?.markAsTouched();
      });
    }
  }

  navigateToPage() {
    this.router.navigate(['/Signup']);
  }

  togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
