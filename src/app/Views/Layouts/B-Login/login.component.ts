import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { userLogin } from '../../../Models/Login';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css' //['./login.component.css', '../../../styles.css']
})

export class LoginComponent implements OnInit {
  ocultarConfirmacionContrasenia: boolean = true;
  ocultarContrasenia: boolean = true;

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    })

  }

  ngOnInit(): void {
  }

  login() {
      this.loginForm.markAllAsTouched();

      if (this.loginForm.valid) {
        console.log('logeado');

        const user: userLogin = {
          iduser: 0,
          email: this.loginForm.get('email')?.value,
          password: this.loginForm.get('password')?.value
        }

        console.log('Username');
        console.log(user);

        console.log('form');
        console.log(this.loginForm);

        this.router.navigateByUrl('/Home');
        this.loginForm.reset();
      } else {

      }
  }

}
