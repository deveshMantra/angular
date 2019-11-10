import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataBindComponent } from './child-data-bind.component';

describe('ChildDataBindComponent', () => {
  let component: ChildDataBindComponent;
  let fixture: ComponentFixture<ChildDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
