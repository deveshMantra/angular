import { TestBed } from '@angular/core/testing';

import { LanguageTranslationService } from './language-translation.service';

describe('LanguageTranslationService', () => {
  let service: LanguageTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
