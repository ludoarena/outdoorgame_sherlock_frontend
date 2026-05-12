import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  userForm!: FormGroup;

  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@demo.com'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.userForm = this.fb.group({
      firstName: [
        this.user.firstName,
        [Validators.required]
      ],

      lastName: [
        this.user.lastName,
        [Validators.required]
      ],

      email: [
        this.user.email,
        [
          Validators.required,
          Validators.email
        ]
      ]
    });

  }

  save(): void {

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    console.log(this.userForm.value);
  }
}