import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {}

  moveToAdmin() {
    this.router.navigate(['/admin/dashboard']);
  }

  moveToInspector() {
    this.router.navigate(['/inspector/dashboard']);
  }

  moveToVendor() {
    this.router.navigate(['/vendor/dashboard']);
  }
  myimage:string = 'assets/images/login.jpg';
}
