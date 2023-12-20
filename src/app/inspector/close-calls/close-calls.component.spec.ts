import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCallsComponent } from './close-calls.component';

describe('CloseCallsComponent', () => {
  let component: CloseCallsComponent;
  let fixture: ComponentFixture<CloseCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CloseCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
