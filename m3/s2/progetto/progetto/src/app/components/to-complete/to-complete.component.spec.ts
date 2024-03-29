import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCompleteComponent } from './to-complete.component';

describe('ToCompleteComponent', () => {
  let component: ToCompleteComponent;
  let fixture: ComponentFixture<ToCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
