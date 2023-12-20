// inspector.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectorService {
  private baseUrl = 'http://localhost:8080/api/calls'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  

  getNewCalls(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/new`);
  }
  assignCall(callNo: string, inspectors: string[]): Observable<any>{
    console.log(`Call ${callNo} assigned to inspectors: ${inspectors.join(', ')}`);
    const body = { callNo, inspectors }; // Adjust this based on your API requirements
    return this.http.post<any>(`${this.baseUrl}/assign-call`, body);
    // Implement the logic to assign the call to the specified inspectors
    

  // Other methods for handling inspectors, assignments, etc.
}
}