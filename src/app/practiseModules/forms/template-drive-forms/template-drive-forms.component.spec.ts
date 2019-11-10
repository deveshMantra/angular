import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormsComponent } from './template-drive-forms.component';

describe('TemplateDriveFormsComponent', () => {
  let component: TemplateDriveFormsComponent;
  let fixture: ComponentFixture<TemplateDriveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDriveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
