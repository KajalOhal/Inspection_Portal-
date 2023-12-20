import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-generate-new-call',
  templateUrl: './generate-new-call.component.html',
  styleUrls: ['./generate-new-call.component.css']
})
export class VendorGenerateNewCallComponent {
  poNo: string = '';
  poLineNo: string = '';
  itemName: string = '';
  itemCode: string = '';
  offeredQuantity: string = '';
  totalQuantity: string = '';
  division: string = '';
  projectNo: string = '';
  wbsNo: string = '';
  inspectionType: string = '';
  inspectionStage: string = '';
  inspectionDate: Date | null = null;
  inspectionLocation: string = '';
  vendorName: string = '';
  callNo: string = '';

  constructor(private router: Router) {}

  generateCall() {
    // Perform logic to generate a new call

    // For demonstration purposes, displaying the entered data in an alert
    const callDetails = {
      poNo: this.poNo,
      poLineNo: this.poLineNo,
      itemName: this.itemName,
      itemCode: this.itemCode,
      offeredQuantity: this.offeredQuantity,
      totalQuantity: this.totalQuantity,
      division: this.division,
      projectNumber: this.projectNo,
      wbsNumber: this.wbsNo,
      inspectionType: this.inspectionType,
      inspectionStage: this.inspectionStage,
      inspectionDate: this.inspectionDate,
      inspectionLocation: this.inspectionLocation,
      vendorName: this.vendorName,
      // Add other fields
    };
    alert(`Call Raised Successfully\n${JSON.stringify(callDetails)}`);

    // Navigate back to the vendor dashboard
    this.router.navigate(['/vendor/dashboard']);
  }
  }

