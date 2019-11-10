import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTempComponent } from './child-temp.component';

describe('ChildTempComponent', () => {
  let component: ChildTempComponent;
  let fixture: ComponentFixture<ChildTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
