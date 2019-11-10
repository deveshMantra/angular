import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentToChildDataBindComponent } from './parent-to-child-data-bind.component';

describe('ParentToChildDataBindComponent', () => {
  let component: ParentToChildDataBindComponent;
  let fixture: ComponentFixture<ParentToChildDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentToChildDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentToChildDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
