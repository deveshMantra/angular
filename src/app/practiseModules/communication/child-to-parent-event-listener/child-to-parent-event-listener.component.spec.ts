import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentEventListenerComponent } from './child-to-parent-event-listener.component';

describe('ChildToParentEventListenerComponent', () => {
  let component: ChildToParentEventListenerComponent;
  let fixture: ComponentFixture<ChildToParentEventListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentEventListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentEventListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
