import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspector-login',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implement logic to check the username and password
    if (this.username === 'admin' && this.password === 'admin123') {
      // Navigate to the inspector dashboard on successful login
      this.router.navigate(['/inspector/dashboard']);
    } else {
      // Handle incorrect login credentials (e.g., show an error message)
      alert('Invalid username or password. Please try again.');
    }
  }

  forgotPassword() {
    // Implement logic for the "Forgot Password" functionality
    alert('Forgot Password functionality coming soon!');
  }
}
