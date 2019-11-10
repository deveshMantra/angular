import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRComponent } from './child-r.component';

describe('ChildRComponent', () => {
  let component: ChildRComponent;
  let fixture: ComponentFixture<ChildRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
