import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { InspectorRoutingModule } from '../inspector-routing.module';
import { InspectorLoginComponent } from './inspector.component'; // Import the correct component
import { InspectorDashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    InspectorLoginComponent, // Add the component to the declarations array
    InspectorDashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    InspectorRoutingModule,
  ]
})
export class InspectorModule { }
