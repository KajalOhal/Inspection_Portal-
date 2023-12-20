import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledCallsComponent } from './cancelled-calls.component';

describe('CancelledCallsComponent', () => {
  let component: CancelledCallsComponent;
  let fixture: ComponentFixture<CancelledCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelledCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelledCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
