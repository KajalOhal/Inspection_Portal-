import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { InspectorDashboardComponent } from './inspector/dashboard/dashboard.component';
import { VendorDashboardComponent } from './vendor/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Add additional routes or redirect to default
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add child routes for other modules
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) },
  { path: 'inspector', loadChildren: () => import('./inspector/inspector.module').then(m => m.InspectorModule) },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'inspector/dashboard', component: InspectorDashboardComponent },
  { path: 'vendor/dashboard', component: VendorDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
