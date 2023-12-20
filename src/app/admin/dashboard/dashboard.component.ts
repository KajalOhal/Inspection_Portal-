// admin-dashboard.component.ts
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  newRegistration() {
    this.router.navigate(['new-registration'], { relativeTo: this.route });
  }

  callManagement() {
    this.router.navigate(['call-management'], { relativeTo: this.route });
  }

  registerUsers() {
    this.router.navigate(['register-users'], { relativeTo: this.route });
  }
  
}
