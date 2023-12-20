
// inspect-new-call.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inspect-new-call',
  templateUrl: './inspect-new-call.component.html',
  styleUrls: ['./inspect-new-call.component.css']
})
export class InspectNewCallComponent {
  callDetails: any = {}; // You should have a service to fetch call details
  callNo: string = '';
  vendorName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    // Get Call_No and Vendor_Name from the route params
    this.route.params.subscribe(params => {
      this.callNo = params['callNo'];
      this.vendorName = params['vendorName'];

      // Assuming you have a service to fetch call details from the backend
      // this.callDetails = yourService.getCallDetails(this.callNo, this.vendorName);
    });
  }

  startCall() {
    // Implement logic to start the call
    // For example, navigate to inspector/inspect-new-call/inspect-call
    this.router.navigate(['/inspector/inspect-new-call/inspect-call', this.callNo, this.vendorName]);
  }

  cancelCall() {
    // Implement logic to cancel the call
    const reason = prompt('Enter reason for canceling the call:');
    // Additional logic to send the reason to the backend or handle as needed
    console.log(`Call ${this.callNo} cancelled. Reason: ${reason}`);
  }
}
