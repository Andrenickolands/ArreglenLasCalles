import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { userLogin } from '../../../Models/Login';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' //['./login.component.css', '../../../styles.css']
})

export class LoginComponent implements OnInit {
  inputType: string = 'password';
  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
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
    const user: userLogin = {
      id: 0,
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.authService.login(user).subscribe(
      response => {
        console.log('Login successful', response);
        
        //  Guardar el token en localStorage
        this.authService.saveToken(response.token);


        // Navegar a Home
        this.router.navigateByUrl('/Home');

        // Limpiar el formulario
        this.loginForm.reset();
      },
      error => {
        console.error('Login error', error);
        // Aquí podrías mostrar un mensaje al usuario
      }
    );
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
