import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordChangeRoutingModule } from './password-change-routing.module';
import { PasswordChangeComponent } from './component/password-change/password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageTranslationModule } from '../../language-translation/language-transalation.module';


@NgModule({
  declarations: [PasswordChangeComponent],
  imports: [
    CommonModule,
    PasswordChangeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    TranslateModule
  ]
})
export class PasswordChangeModule { }
