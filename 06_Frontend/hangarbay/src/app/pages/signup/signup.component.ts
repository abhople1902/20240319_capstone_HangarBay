import { Component } from '@angular/core';
import { FormsModule,NgModel } from '@angular/forms';
import { NgStyle } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgStyle,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  usernameErrorVisibility: boolean = false;
  emailErrorVisibility: boolean = false;
  passwordErrorVisibility: boolean = false;

  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  experienceYears: number = 0;
  specializations: string = '';

  usernameErrorMessage: string = '';
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';
  submitDisabled: boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validateUsername(): void {
    // Example validation: Username should not be empty
    if (this.username.trim().length === 0) {
      this.usernameErrorMessage = 'Username cannot be empty';
      this.usernameErrorVisibility = true;
    } else {
      this.usernameErrorVisibility = false;
    }
  }

  validateEmail(): void {
    // Simple email regex for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailErrorMessage = 'Invalid email format';
      this.emailErrorVisibility = true;
    } else {
      this.emailErrorVisibility = false;
    }
  }

  validatePassword(): void {
    if (this.password.length < 8) {
      this.passwordErrorMessage = 'Password must be greater than 8 characters';
      this.passwordErrorVisibility = true;
    } else if (!/[A-Z]/.test(this.password)) {
      this.passwordErrorMessage = 'Password must contain at least one capital letter';
      this.passwordErrorVisibility = true;
    } else {
      this.passwordErrorVisibility = false;
    }
    this.checkAllValidations();
  }

  hideUsernameError() {
    this.usernameErrorVisibility = false;
  }

  hideEmailError() {
    this.emailErrorVisibility = false;
  }

  hidePasswordError() {
    this.passwordErrorVisibility = false;
  }

  checkAllValidations(): void {
    // Check if all validations pass
    const isUsernameValid = !this.usernameErrorVisibility && this.username.trim().length > 0;
    const isEmailValid = !this.emailErrorVisibility && this.email.trim().length > 0;
    const isPasswordValid = !this.passwordErrorVisibility && this.password.trim().length > 0;

    // Update submitDisabled based on validations
    this.submitDisabled = !(isUsernameValid && isEmailValid && isPasswordValid);
  }

  // If already have an account then navigate to Login
  navToLogin() {
    this.router.navigate(['signin']);
  }

  storeUserCred() {
    const technicianData = {
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
      experienceYears: this.experienceYears,
      specializations: this.specializations // Splitting the string to get individual specializations
    };

    this.http.post('http://localhost:3000/auth/techsignup', technicianData).subscribe({
      next: (response: any) => {
        console.log('Technician registered successfully');
        this.router.navigate(['signin']);
      },
      error: (error) => {
        console.error('Registration error:', error);
      }
    });
  }
}
