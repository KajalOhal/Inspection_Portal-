import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCallsComponent } from './new-calls.component';

describe('NewCallsComponent', () => {
  let component: NewCallsComponent;
  let fixture: ComponentFixture<NewCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
