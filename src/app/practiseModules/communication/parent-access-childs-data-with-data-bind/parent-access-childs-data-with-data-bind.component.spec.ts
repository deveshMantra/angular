import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAccessChildsDataWithDataBindComponent } from './parent-access-childs-data-with-data-bind.component';

describe('ParentAccessChildsDataWithDataBindComponent', () => {
  let component: ParentAccessChildsDataWithDataBindComponent;
  let fixture: ComponentFixture<ParentAccessChildsDataWithDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAccessChildsDataWithDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAccessChildsDataWithDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
