import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNewCallsComponent } from './new-calls.component';

describe('NewCallsComponent', () => {
  let component: VendorNewCallsComponent;
  let fixture: ComponentFixture<VendorNewCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorNewCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorNewCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
