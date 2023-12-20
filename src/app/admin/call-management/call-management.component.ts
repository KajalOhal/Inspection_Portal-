// Import necessary modules and services
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call-management',
  templateUrl: './call-management.component.html',
  styleUrls: ['./call-management.component.css']
})
export class CallManagementComponent {

  constructor(private router: Router) {}

  navigateToNewCalls() {
    // Navigate to New Calls
    this.router.navigate(['/admin/new-calls']);
  }

  navigateToOpenCalls() {
    // Navigate to Open Calls
    this.router.navigate(['/admin/open-calls']);
  }

  navigateToHoldCalls() {
    // Navigate to Hold Calls
    this.router.navigate(['/admin/hold-calls']);
  }

  navigateToCloseCalls() {
    // Navigate to Close Calls
    this.router.navigate(['/admin/close-calls']);
  }

  navigateToCancelledCalls() {
    // Navigate to Cancelled Calls
    this.router.navigate(['/admin/cancelled-calls']);
  }

  navigateToAssignedCalls() {
    // Navigate to Assigned Calls
    this.router.navigate(['/admin/assigned-calls']);
  }
}
