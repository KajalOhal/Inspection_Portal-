// vendor-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorLoginComponent} from './vendor/vendor.component';
import { VendorDashboardComponent } from './vendor/dashboard/dashboard.component'; // Correct the import alias
import { VendorGenerateNewCallComponent } from './vendor/generate-new-call/generate-new-call.component';
import { VendorNewCallsComponent } from './vendor/new-calls/new-calls.component';
import { VendorOpenCallsComponent } from './vendor/open-calls/open-calls.component';
import { VendorHoldCallsComponent } from './vendor/hold-calls/hold-calls.component';
import { VendorCloseCallsComponent } from './vendor/close-calls/close-calls.component';
import { VendorCancelledCallsComponent } from './vendor/cancelled-calls/cancelled-calls.component';

const routes: Routes = [
  {
    path: 'vendor',
    component: VendorLoginComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
      { path: 'dashboard', component: VendorDashboardComponent },
      { path: 'generate-new-call', component: VendorGenerateNewCallComponent },
      { path: 'new-calls', component: VendorNewCallsComponent },
      { path: 'open-calls', component: VendorOpenCallsComponent },
      { path: 'hold-calls', component: VendorHoldCallsComponent },
      { path: 'close-calls', component: VendorCloseCallsComponent },
      { path: 'cancelled-calls', component: VendorCancelledCallsComponent },
      // Add more routes as needed
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRoutingModule { }
