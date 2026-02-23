import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-angular-mat-demo',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './angular-mat-demo.html',
  styleUrl: './angular-mat-demo.css',
})
export class AngularMatDemo {
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  //formdata
  formdata: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  });

  //onClickSubmit
  onClickSubmit() {
    this.submitted = true;

    if (this.formdata.valid) {
      const data = this.formdata.value;

      this.userName = data.userName!;
      this.email = data.email!;
      this.password = data.password!;
      this.gender = data.gender!;
      this.address = data.address!;
      this.angularSkillLevel = data.angularSkillLevel!;
      this.birthDate = data.birthDate!;

      console.log("Form Submitted!", data);
    } else {
      console.log("Form is not valid!");
    }
  }
}
