import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiltemppractiseDeleteComponent } from './chiltemppractise-delete.component';

describe('ChiltemppractiseDeleteComponent', () => {
  let component: ChiltemppractiseDeleteComponent;
  let fixture: ComponentFixture<ChiltemppractiseDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiltemppractiseDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiltemppractiseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
