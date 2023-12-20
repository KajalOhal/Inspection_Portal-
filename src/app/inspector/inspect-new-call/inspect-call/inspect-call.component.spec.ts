import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectCallComponent } from './inspect-call.component';

describe('InspectCallComponent', () => {
  let component: InspectCallComponent;
  let fixture: ComponentFixture<InspectCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
