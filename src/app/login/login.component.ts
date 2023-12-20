import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginAsAdmin() {
    // Navigate to the admin dashboard
    this.router.navigate(['/admin/dashboard']);
  }

  loginAsInspector() {
    // Navigate to the inspector dashboard
    this.router.navigate(['/inspector/dashboard']);
  }

  loginAsVendor() {
    // Navigate to the vendor dashboard
    this.router.navigate(['/vendor/dashboard']);
  }
}
