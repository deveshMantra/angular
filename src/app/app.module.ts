import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommunicationComponent} from './practiseModules/communication/communication.component';
import {ParentToChildDataBindComponent} from './practiseModules/communication/parent-to-child-data-bind/parent-to-child-data-bind.component';
import {Child1Component} from './practiseModules/communication/parent-to-child-data-bind/child1/child1.component';
import {InterceptSetterComponent} from './practiseModules/communication/intercept-setter/intercept-setter.component';
import {ChildInterceptComponent} from './practiseModules/communication/intercept-setter/child-intercept/child-intercept.component';
import {ChildToParentEventListenerComponent} from './practiseModules/communication/child-to-parent-event-listener/child-to-parent-event-listener.component';
import {EventChildComponent} from './practiseModules/communication/child-to-parent-event-listener/event-child/event-child.component';
import {ParentAccessChildsDataWithDataBindComponent} from './practiseModules/communication/parent-access-childs-data-with-data-bind/parent-access-childs-data-with-data-bind.component';
import {ChildDataBindComponent} from './practiseModules/communication/parent-access-childs-data-with-data-bind/child-data-bind/child-data-bind.component';
import {TempComponent} from './practiseModules/communication/temp/temp.component';
import {ChildTempComponent} from './practiseModules/communication/temp/child-temp/child-temp.component';
import {ParentAccessChildImportChildComponent} from './practiseModules/communication/parent-access-child-import-child/parent-access-child-import-child.component';
import {ViewChildComponent} from './practiseModules/communication/parent-access-child-import-child/view-child/view-child.component';
import {CustomPipesComponent} from './practiseModules/custom-pipes/custom-pipes.component';

// pipes
import {UpperCasePipe} from './practiseModules/custom-pipes/upperCasePipe';
import {ReactiveFormsComponent} from './practiseModules/forms/reactive-forms/reactive-forms.component';
import {TemplateDriveFormsComponent} from './practiseModules/forms/template-drive-forms/template-drive-forms.component';
import {TempPractiseDeleteComponent} from './practiseModules/temp-practise-delete/temp-practise-delete.component';
import {ChiltemppractiseDeleteComponent} from './practiseModules/temp-practise-delete/chiltemppractise-delete/chiltemppractise-delete.component';
import {ChildRoutesComponent} from './practiseModules/child-routes/child-routes.component';
import {ChildRComponent} from './practiseModules/child-routes/child-r/child-r.component';
import { LanguageTranslationComponent } from './practiseModules/language-translation/language-translation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from './i18n/i18n.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
import { SharedModule} from './modules/shared/shared.module'

import { ToastMessageExampleComponent } from './practiseModules/toast-message-example/toast-message-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunicationComponent,
    ParentToChildDataBindComponent,
    Child1Component,
    InterceptSetterComponent,
    ChildInterceptComponent,
    ChildToParentEventListenerComponent,
    EventChildComponent,
    ParentAccessChildsDataWithDataBindComponent,
    ChildDataBindComponent,
    TempComponent,
    ChildTempComponent,
    ParentAccessChildImportChildComponent,
    ViewChildComponent,
    UpperCasePipe,
    CustomPipesComponent,
    ReactiveFormsComponent,
    TemplateDriveFormsComponent,
    TempPractiseDeleteComponent,
    ChiltemppractiseDeleteComponent,
    ChildRoutesComponent,
    ChildRComponent,
    LanguageTranslationComponent,
    ToastMessageExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    I18nModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
