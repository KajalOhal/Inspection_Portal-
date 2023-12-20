import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private openCalls: any[] = []; // Array to store open calls
  private closeCalls: any[] = []; // Array to store close calls
  private holdCalls: any[] = []; // Array to store hold calls

  private apiUrl = 'http://your-backend-api-url'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  saveCallDetails(callNo: string, vendorName: string, reviewStatus: string, inspectionDecision: string, releaseIRN: string, notes: string, punchPoint: string) {
    // Implement logic to save the call details
    const callDetails = { callNo, vendorName, reviewStatus, inspectionDecision, releaseIRN, notes, punchPoint };
    // Save to a service or backend, or store in a local array
  }

  submitCallDetails(callNo: string, vendorName: string, reviewStatus: string, inspectionDecision: string, releaseIRN: string, notes: string, punchPoint: string) {
    // Implement logic to submit the call details
    const callDetails = { callNo, vendorName, reviewStatus, inspectionDecision, releaseIRN, notes, punchPoint };
    // Submit to a service or backend
  }

  moveCallToCloseCalls(callNo: string, vendorName: string) {
    // Move the call to close calls array
    // Remove from open calls array or fetch from the backend
    console.log(`Moving call ${callNo} to close calls for vendor ${vendorName}`);
  }

  moveCallToHoldCalls(callNo: string, vendorName: string) {
    // Move the call to hold calls array
    // Remove from open calls array or fetch from the backend
  }

  generateNewCall(newCallData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/calls/generate`, newCallData);
}
}