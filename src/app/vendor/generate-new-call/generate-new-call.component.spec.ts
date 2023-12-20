import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorGenerateNewCallComponent } from './generate-new-call.component';

describe('GenerateNewCallComponent', () => {
  let component: VendorGenerateNewCallComponent;
  let fixture: ComponentFixture<VendorGenerateNewCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VendorGenerateNewCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendorGenerateNewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
