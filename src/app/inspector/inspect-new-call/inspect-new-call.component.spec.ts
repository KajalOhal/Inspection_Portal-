import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectNewCallComponent } from './inspect-new-call.component';

describe('InspectNewCallComponent', () => {
  let component: InspectNewCallComponent;
  let fixture: ComponentFixture<InspectNewCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectNewCallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InspectNewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
