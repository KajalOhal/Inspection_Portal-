import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCallsComponent } from './open-calls.component';

describe('OpenCallsComponent', () => {
  let component: OpenCallsComponent;
  let fixture: ComponentFixture<OpenCallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCallsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
