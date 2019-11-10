import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Components
import {CommunicationComponent} from './practiseModules/communication/communication.component';
import {ParentToChildDataBindComponent} from './practiseModules/communication/parent-to-child-data-bind/parent-to-child-data-bind.component';
import {InterceptSetterComponent} from './practiseModules/communication/intercept-setter/intercept-setter.component';
import {ChildToParentEventListenerComponent} from './practiseModules/communication/child-to-parent-event-listener/child-to-parent-event-listener.component';
import {ParentAccessChildsDataWithDataBindComponent} from './practiseModules/communication/parent-access-childs-data-with-data-bind/parent-access-childs-data-with-data-bind.component';
import {TempComponent} from './practiseModules/communication/temp/temp.component';
import {ParentAccessChildImportChildComponent} from './practiseModules/communication/parent-access-child-import-child/parent-access-child-import-child.component';
import {CustomPipesComponent} from './practiseModules/custom-pipes/custom-pipes.component';
import {TemplateDriveFormsComponent} from './practiseModules/forms/template-drive-forms/template-drive-forms.component';
import {TempPractiseDeleteComponent} from './practiseModules/temp-practise-delete/temp-practise-delete.component';
import {ChildRoutesComponent} from './practiseModules/child-routes/child-routes.component';
import {ChildRComponent} from './practiseModules/child-routes/child-r/child-r.component';
import {ReactiveFormsComponent} from "./practiseModules/forms/reactive-forms/reactive-forms.component";

const routes: Routes = [
  {path: 'keyEnter', component: CommunicationComponent},
  {path: 'parentToChildDataBind', component: ParentToChildDataBindComponent},
  {path: 'interCept', component: InterceptSetterComponent},
  {path: 'childToParentEventListener', component: ChildToParentEventListenerComponent},
  {path: 'parentChildDataBinding', component: ParentAccessChildsDataWithDataBindComponent},
  {path: 'tempComponent', component: TempComponent},
  {path: 'parentChildImport', component: ParentAccessChildImportChildComponent},
  {path: 'customPipe', component: CustomPipesComponent},
  {path: 'templateDrivenForms', component: TemplateDriveFormsComponent},
  {path: 'reactiveForms', component: ReactiveFormsComponent},
  {path: 'delete', component: TempPractiseDeleteComponent},
  {
    path: 'childRoute', component: ChildRoutesComponent,
    children: [
      {path: 'childRoute1', component: ChildRComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
