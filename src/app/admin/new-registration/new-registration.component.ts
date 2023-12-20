import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css'],
})
export class NewRegistrationComponent {
  userDetails: any = {
    category: '',
    name: '',
    mobile: '',
    email: '',  
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  createUser() {
    // Perform logic to create user (e.g., send data to a server)
    // Simulating the server request with a simple alert
    alert('User added successfully');

    // Navigate back to the admin dashboard
    this.router.navigate(['/admin/dashboard']);
  }
}
