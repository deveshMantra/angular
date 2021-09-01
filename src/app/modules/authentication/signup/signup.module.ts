import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './component/signup/signup.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageTranslationModule } from  './../../language-translation/language-transalation.module'


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LanguageTranslationModule
  ]
})
export class SignupModule { }
