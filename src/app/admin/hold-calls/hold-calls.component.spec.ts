import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldCallsComponent } from './hold-calls.component';

describe('HoldCallsComponent', () => {
  let component: HoldCallsComponent;
  let fixture: ComponentFixture<HoldCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoldCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
