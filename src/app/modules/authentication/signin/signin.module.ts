import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './component/signin/signin.component';
import { LanguageTranslationModule } from  './../../language-translation/language-transalation.module'
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LanguageTranslationModule,
    TranslateModule
  ]
})
export class SigninModule { }
