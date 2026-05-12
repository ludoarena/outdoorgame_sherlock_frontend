import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { User } from "../model/user";

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
  @Output() formSubmitted = new EventEmitter<Partial<User>>();

  userForm!: FormGroup;

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

    this.formSubmitted.emit(this.userForm.value);
  }
}