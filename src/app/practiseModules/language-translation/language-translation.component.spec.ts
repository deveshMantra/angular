import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTranslationComponent } from './language-translation.component';

describe('LanguageTranslationComponent', () => {
  let component: LanguageTranslationComponent;
  let fixture: ComponentFixture<LanguageTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
