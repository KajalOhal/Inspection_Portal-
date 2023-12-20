import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Don't forget to import FormsModule
import { VendorRoutingModule } from '../vendor-routing.module';
import { VendorLoginComponent } from '../vendor/vendor.component';
import { VendorDashboardComponent } from '../vendor/dashboard/dashboard.component';
import { VendorGenerateNewCallComponent } from './generate-new-call/generate-new-call.component';


@NgModule({
  declarations: [
    VendorLoginComponent,
    VendorDashboardComponent,
    VendorGenerateNewCallComponent,
    
  ],
  imports: [CommonModule, FormsModule, VendorRoutingModule],
})
export class VendorModule {}

