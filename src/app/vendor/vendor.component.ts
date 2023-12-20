// vendor-login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implement logic to check username and password
    // For demonstration purposes, checking if the username is 'vendor' and password is 'password'
    if (this.username === 'vendor' && this.password === 'password') {
      // Navigate to the vendor dashboard
      this.router.navigate(['/vendor/dashboard']);
    } else {
      // Display an alert for invalid credentials (replace this with your error handling logic)
      alert('Invalid username or password');
    }
  }
}
