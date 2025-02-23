import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators extends Validators {

  private passw;
  private onlyNumbers;
  private onlyLetters;
  private priceFormat;
  private decimalFormat;

   constructor() {
       super();
    this.passw = /^ (?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]) (?=.*[!@#\$%\^&*\(\)\-_.]) $/;
    this.onlyNumbers = /^ \d+ $/;
    this.onlyLetters = /^ [a-zA-Z]+ $/;
    this.priceFormat = /[0-9]+.?[0-9]+?$/;
    this.decimalFormat = /^\d*(\.\d{0,2})?$/;
  }

  // Getters And Setters

  getPassw(): any {
    return this.passw;
  }
  getPriceformat(): any {
    return this.priceFormat;
  }
  getOnlyNumbers(): any {
    return this.onlyNumbers;
  }
  getOnlyLetters(): any {
    return this.onlyLetters;
  }
  getDecimalFormat(): any {
    return this.decimalFormat;
  }


  static passw(control: AbstractControl): ValidationErrors | null {
    return /^ (?=.*[a-z]) (?=.*[A-Z]) (?=.*[0-9]) (?=.*[!@#\$%\^&*\(\)\-_.]) $/.test(control.value) ? null : { passw: true };
  }

  static onlyNumbers(control: AbstractControl): ValidationErrors | null {
    return /^ \d+ $/.test(control.value) ? null : { onlyNumbers: true };
  }

  static onlyLetters(control: AbstractControl): ValidationErrors | null {
    return /^ [a-zA-Z]+ $/.test(control.value) ? null : { onlyLetters: true };
  }

  static mustBeEqual(nombrePrimerControl: string, nombreSegundoControl: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const primerControl = group.get(nombrePrimerControl);
      const segundoControl = group.get(nombreSegundoControl);
      return primerControl?.value === segundoControl?.value ? null : { mustBeEqual: true };
    };
  }

  static mustBeDifferent(firstField: string, secondField: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const firstControl = group.get(firstField);
      const secondControl = group.get(secondField);
      return firstControl?.value != secondControl?.value ? null : { mustBeDifferent: true };
    };
  }
}