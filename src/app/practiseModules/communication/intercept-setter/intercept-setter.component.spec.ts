import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptSetterComponent } from './intercept-setter.component';

describe('InterceptSetterComponent', () => {
  let component: InterceptSetterComponent;
  let fixture: ComponentFixture<InterceptSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
