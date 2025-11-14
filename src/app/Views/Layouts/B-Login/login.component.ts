import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomValidators } from '../../../../Communs/Custom-validators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputType = 'password';
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), CustomValidators.passw]]
    });
  }

  ngOnInit(): void {
    // Solo ejecutar localStorage si estamos en navegador
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem('user');
      // Solo redirigir si NO vienes de un logout
      const fromLogout = sessionStorage.getItem('fromLogout');

      if (user && !fromLogout) {
        this.router.navigate(['/dashboard']);
      }

      // Borrar marca de logout
      sessionStorage.removeItem('fromLogout');
    }
  }
  isFieldInvalid(fieldName: string): boolean {
  const field = this.loginForm.get(fieldName);
  return !!(field && field.invalid && (field.dirty || field.touched));
}

  login() {
    if (!this.loginForm.valid) {
      this.errorMessage = '⚠️ Completa los campos correctamente';
      Object.values(this.loginForm.controls).forEach(c => c.markAsTouched());
      return;
    }

    this.isLoading = true;

    const credentials = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    };

    this.http.post('http://localhost:3000/api/login', credentials).subscribe({
      next: (response: any) => {
        this.isLoading = false;

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('isLoggedIn', 'true');
        }

        this.successMessage = 'Inicio de sesión exitoso';

        setTimeout(() => this.router.navigate(['/dashboard']), 800);
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = '❌ Email o contraseña incorrectos';
      }
    });
  }

  togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  navigateToPage() {
    this.router.navigate(['/Signup']);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');

      // Marcar que vienes desde logout
      sessionStorage.setItem('fromLogout', 'true');
    }

    this.router.navigate(['/login']);
  }
}
