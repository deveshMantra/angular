import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartexampleComponent } from './apexchartexample.component';

describe('ApexchartexampleComponent', () => {
  let component: ApexchartexampleComponent;
  let fixture: ComponentFixture<ApexchartexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexchartexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexchartexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
