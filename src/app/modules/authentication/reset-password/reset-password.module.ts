import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { LanguageTranslationModule } from  './../../language-translation/language-transalation.module'
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    LanguageTranslationModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResetPasswordModule { }
