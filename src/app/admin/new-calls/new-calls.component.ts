// new-calls.component.ts
import { InspectorService } from '../../inspector.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-calls',
  templateUrl: './new-calls.component.html',
  styleUrls: ['./new-calls.component.css']
})
export class NewCallsComponent {
  newCalls: any[] = []; // You should have a service to fetch new calls
  inspectors: any[] = [];

  // Assuming you have a service to fetch new calls from the backend
  constructor(private router: Router, private inspectorService: InspectorService) {
    // Fetch new calls from your service
    // this.newCalls = yourService.getNewCalls(); // Implement this method in your service
  }

  viewCallDetails(callNo: string, vendorName: string) {
    // Implement logic to view call details based on callNo and vendorName
    // For example, navigate to a new route or display a modal with details
    this.router.navigate(['/call-details', callNo, vendorName]);
  }

  assignCall(callNo: string) {
    const selectedInspectors = this.getSelectedInspectors();
    // Example: Make an HTTP request to update assignment status
    this.inspectorService.assignCall(callNo, selectedInspectors).subscribe(
      () => {
        // Handle success, e.g., navigate to a different route
        this.router.navigate(['/assigned-calls']);
      },
      (error: any) => {
        // Handle error, display an alert, or show an error message
        console.error('Error assigning call:', error);
      }
    );
  }
  

  private getSelectedInspectors(): string[] {
    // Fetch selected inspectors from the dropdown list
    // You can get this information from your component's template
    // For example, using [(ngModel)] or (change) event
    // Return an array of selected inspectors
    return [];
  }
}
