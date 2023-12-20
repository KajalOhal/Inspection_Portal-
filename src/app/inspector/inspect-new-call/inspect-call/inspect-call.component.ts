// inspect-call.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallService } from '../../../call.service';


@Component({
  selector: 'app-inspect-call',
  templateUrl: './inspect-call.component.html',
  styleUrls: ['./inspect-call.component.css']
})
export class InspectCallComponent {
  callNo: string = '';
  vendorName: string = '';
  reviewStatus: string = ''; // Use appropriate type based on your needs
  inspectionDecision: string = ''; // Use appropriate type based on your needs
  releaseIRN: string = ''; // Use appropriate type based on your needs
  notes: string = '';
  punchPoint: string = '';
  inspectionPhotos: { name: string, file: File }[] = [];
  inspectionReports: { name: string, file: File }[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private callService: CallService) {
    // Get Call_No and Vendor_Name from the route params
    this.route.params.subscribe(params => {
      this.callNo = params['callNo'];
      this.vendorName = params['vendorName'];
    });
  }

  saveCall() {
    // Implement logic to save the call details
    // For example, save the data to a service or backend
    this.callService.saveCallDetails(this.callNo, this.vendorName, this.reviewStatus, this.inspectionDecision, this.releaseIRN, this.notes, this.punchPoint);
    console.log('Call details saved successfully.');
  }

  submitCall() {
    // Implement logic to submit the call details
    // For example, send the data to a service or backend
    this.callService.submitCallDetails(this.callNo, this.vendorName, this.reviewStatus, this.inspectionDecision, this.releaseIRN, this.notes, this.punchPoint);
    console.log('Call details submitted successfully.');

    // Navigate to the appropriate tab based on Inspection_Decision
    if (this.inspectionDecision === 'Accept' || this.inspectionDecision === 'Reject' || this.inspectionDecision === 'Rework') {
      this.callService.moveCallToCloseCalls(this.callNo, this.vendorName);
    } else if (this.inspectionDecision === 'Hold') {
      this.callService.moveCallToHoldCalls(this.callNo, this.vendorName);
    } 
    console.log('Call details submitted successfully.');
  }
}
