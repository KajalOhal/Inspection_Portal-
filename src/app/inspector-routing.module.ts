import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InspectorLoginComponent } from './inspector/inspector.component';
import { InspectorDashboardComponent } from './inspector/dashboard/dashboard.component';
import { InspectNewCallComponent } from './inspector/inspect-new-call/inspect-new-call.component';
import { InspectCallComponent } from './inspector/inspect-new-call/inspect-call/inspect-call.component';
import { InspectorOpenCallsComponent } from './inspector/open-calls/open-calls.component';
import { InspectorHoldCallsComponent } from './inspector/hold-calls/hold-calls.component';
import { InspectorCloseCallsComponent } from './inspector/close-calls/close-calls.component';
import { InspectorCancelledCallsComponent } from './inspector/cancelled-calls/cancelled-calls.component';

const routes: Routes = [
  {
    path: 'inspector',
    component: InspectorLoginComponent,
    children: [
      { path: 'dashboard', component: InspectorDashboardComponent },
      { path: 'inspect-new-call', component: InspectNewCallComponent },
      { path: 'inspect-call', component: InspectCallComponent },
      { path: 'open-calls', component: InspectorOpenCallsComponent },
      { path: 'hold-calls', component: InspectorHoldCallsComponent },
      { path: 'close-calls', component: InspectorCloseCallsComponent },
      { path: 'cancelled-calls', component: InspectorCancelledCallsComponent },
      
      // Add more routes as needed
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InspectorRoutingModule { }
