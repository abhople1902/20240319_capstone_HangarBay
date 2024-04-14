import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsComponent } from '../../stats/stats.component';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [StatsComponent],
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