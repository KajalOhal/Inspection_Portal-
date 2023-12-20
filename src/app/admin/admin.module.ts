import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../admin-routing.module';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { NewRegistrationComponent } from './new-registration/new-registration.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NewRegistrationComponent, // Don't forget to declare your component here
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
})
export class AdminModule {}
