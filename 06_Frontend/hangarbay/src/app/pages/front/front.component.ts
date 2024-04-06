import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [],
  templateUrl: './front.component.html',
  styleUrl: './front.component.css'
})
export class FrontComponent {
  constructor(private router: Router) {}

  redirectToSignIn() {
    this.router.navigate(['/signin']);
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }
}