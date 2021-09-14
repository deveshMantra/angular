import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsexampleComponent } from './chartjsexample.component';

describe('ChartjsexampleComponent', () => {
  let component: ChartjsexampleComponent;
  let fixture: ComponentFixture<ChartjsexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
