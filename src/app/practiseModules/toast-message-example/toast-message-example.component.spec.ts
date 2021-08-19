import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageExampleComponent } from './toast-message-example.component';

describe('ToastMessageExampleComponent', () => {
  let component: ToastMessageExampleComponent;
  let fixture: ComponentFixture<ToastMessageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastMessageExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
