import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { userLogin } from '../../core/interfaces/login';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  ocultarConfirmacionContrasenia: boolean = true;
  ocultarContrasenia: boolean = true;

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      correoUsuario: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    })

  }

  ngOnInit(): void {
  }

  login() {
    //   this.loginForm.markAllAsTouched();

    //   if (this.loginForm.valid) {
    //     console.log('logeado');

    //     const user: userLogin = {
    //       idusuario: 0,
    //       correoUsuario: this.loginForm.get('correoUsuario')?.value,
    //       password: this.loginForm.get('password')?.value
    //     }

    //     console.log('Username');
    //     console.log(user);

    //     console.log('form');
    //     console.log(this.loginForm);

    //     // this.router.navigateByUrl('/home');
    //     this.router.navigateByUrl('/dashboard');
    //     this.loginForm.reset();
    //   } else {

    //   }
  }

}
