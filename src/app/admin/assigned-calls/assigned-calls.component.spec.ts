import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedCallsComponent } from './assigned-calls.component';

describe('AssignedCallsComponent', () => {
  let component: AssignedCallsComponent;
  let fixture: ComponentFixture<AssignedCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
