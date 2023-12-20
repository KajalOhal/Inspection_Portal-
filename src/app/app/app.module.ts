import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component'; // Assuming your root component is 'app.component.ts'
import { LoginComponent } from '../login/login.component';
import { AdminModule } from '../admin/admin.module';
import { VendorModule } from '../vendor/vendor.module';
import { InspectorModule } from '../inspector/inspector.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    AdminModule,
    VendorModule,
    InspectorModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
