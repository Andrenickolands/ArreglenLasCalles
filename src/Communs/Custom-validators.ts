import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static onlyLetters(control: AbstractControl): ValidationErrors | null {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(control.value)
      ? null
      : { onlyLetters: true };
  }

  static passw(control: AbstractControl): ValidationErrors | null {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&*\(\)\-_.]).{8,}$/.test(control.value)
      ? null
      : { passw: true };
  }

  static mustBeEqual(controlName1: string, controlName2: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const ctrl1 = group.get(controlName1);
      const ctrl2 = group.get(controlName2);
      return ctrl1?.value === ctrl2?.value ? null : { mustBeEqual: true };
    };
  }
}
