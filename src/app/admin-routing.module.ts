import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NewRegistrationComponent } from './admin/new-registration/new-registration.component';
import { CallManagementComponent } from './admin/call-management/call-management.component';
import { RegisterUsersComponent } from './admin/register-users/register-users.component';
import { NewCallsComponent } from './admin/new-calls/new-calls.component';
import { OpenCallsComponent } from './admin/open-calls/open-calls.component';
import { HoldCallsComponent } from './admin/hold-calls/hold-calls.component';
import { CloseCallsComponent } from './admin/close-calls/close-calls.component';
import { CancelledCallsComponent } from './admin/cancelled-calls/cancelled-calls.component';
import { AssignedCallsComponent } from './admin/assigned-calls/assigned-calls.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to dashboard by default
      { path: 'dashboard', component: DashboardComponent },
      { path: 'new-registration', component: NewRegistrationComponent },
      { path: 'call-management', component: CallManagementComponent },
      { path: 'admin/register-users', component: RegisterUsersComponent },
      { path: 'admin/new-calls', component: NewCallsComponent },
      { path: 'admin/open-calls', component: OpenCallsComponent },
      { path: 'admin/hold-calls', component: HoldCallsComponent },
      { path: 'admin/close-calls', component: CloseCallsComponent },
      { path: 'admin/cancelled-calls', component: CancelledCallsComponent },
      { path: 'admin/assigned-calls', component: AssignedCallsComponent },
      // Add other admin-related routes here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

  