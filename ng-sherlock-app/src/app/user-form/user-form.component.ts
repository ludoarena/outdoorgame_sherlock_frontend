import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { User } from "../model/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @Input() user! : User;

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private router : Router) {}

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
    console.log("Submit form");

    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    console.log(this.userForm.value);
    this.router.navigate(['/users', this.user.id]);
  }
}