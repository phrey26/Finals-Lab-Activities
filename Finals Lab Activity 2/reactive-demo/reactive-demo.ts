import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-reactive-demo',
  imports: [ReactiveFormsModule,],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css',
})
export class ReactiveDemo {
  roles = ['Admin', 'User', 'Guest'];
  genders = ['Male', 'Female', 'Other'];

  currentYear = new Date().getFullYear();
  years: number[] = [];

  constructor() {
    // Generate years from currentYear back to 1950
    for (let y = this.currentYear; y >= 1950; y--) {
      this.years.push(y);
    }
  }

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)
    ]),
    role: new FormControl('Admin', Validators.required),
    gender: new FormControl('', Validators.required),
    yearOfBirth: new FormControl('', Validators.required)
  });

  get isUnderAge(): boolean {
    const year = this.form.value.yearOfBirth;
    if (!year) return false;

    const age = this.currentYear - Number(year);
    return age < 18;
  }

  onSubmit() {
    if (this.form.invalid || this.isUnderAge) {
      this.form.markAllAsTouched();
      return;
    }

    alert('Registration Complete');

    this.form.reset({
      role: 'Admin'
    });
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return !!(control && control.touched && control.invalid);
  }
}
