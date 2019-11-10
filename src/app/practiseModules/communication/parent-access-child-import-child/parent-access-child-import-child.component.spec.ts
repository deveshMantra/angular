import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAccessChildImportChildComponent } from './parent-access-child-import-child.component';

describe('ParentAccessChildImportChildComponent', () => {
  let component: ParentAccessChildImportChildComponent;
  let fixture: ComponentFixture<ParentAccessChildImportChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAccessChildImportChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAccessChildImportChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
