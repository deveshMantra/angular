import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';



@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule, TranslateModule
  ],
  exports: [LanguageSelectorComponent]
})
export class LanguageTranslationModule { }
