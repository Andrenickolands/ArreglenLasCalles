import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-acept-terms',
  imports: [RouterLink, CommonModule],
  templateUrl: './acept-terms.component.html',
  styleUrl: './acept-terms.component.css'
})
export class AceptTermsComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.user = {
      id: 0,
      name: '',
      email: '',
      country: '',
      birthdate: new Date(),
      password: '',
      passwordConfirm: '',
      aceptTyCUser: false
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.user = {
      //   id: Number(params.get('id') || '0'),
      //   name: params.get('name') || '',
      //   email: params.get('email') || '',
      //   country: params.get('country') || '',
      //   // birthdate: params.get('birthdate') || new Date(),
      //   password: params.get('password') || '',
      //   passwordConfirm: params.get('passwordConfirm') || '',
      //   aceptTyCUser: params.get('aceptTyCUser') === 'true'
      // };
    });

  }

  submitForm() {
    this.acept;
  }

  acept() {
    this.user.aceptTyCUser = true;

  }

  signUp() {

    // const user: User = {
    //   id: 0,
    //   name: this.signUpUserForm.get('name')?.value,
    //   email: this.signUpUserForm.get('email')?.value,
    //   country: this.signUpUserForm.get('country')?.value,
    //   birthdate: this.signUpUserForm.get('birthdate')?.value,
    //   password: this.signUpUserForm.get('password')?.value,
    //   passwordConfirm: this.signUpUserForm.get('passwordConfirm')?.value,
    //   aceptTyCUser: this.signUpUserForm.get('aceptTyCUser')?.value
    // }

    // this.router.navigateByUrl('/Acept-terms');

  }

  goBack(): void {
    this.location.back();
  }

}