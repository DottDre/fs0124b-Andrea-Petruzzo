import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodetailComponent } from './autodetail.component';

describe('AutodetailComponent', () => {
  let component: AutodetailComponent;
  let fixture: ComponentFixture<AutodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutodetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
