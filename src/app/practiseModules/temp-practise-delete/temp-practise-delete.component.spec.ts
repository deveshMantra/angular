import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempPractiseDeleteComponent } from './temp-practise-delete.component';

describe('TempPractiseDeleteComponent', () => {
  let component: TempPractiseDeleteComponent;
  let fixture: ComponentFixture<TempPractiseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempPractiseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempPractiseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
