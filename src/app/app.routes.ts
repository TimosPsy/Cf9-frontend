import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Step6Welcome } from './components/step6-welcome/step6-welcome';
import { Step8SimpleDataTableShow } from './components/step8-simple-data-table-show/step8-simple-data-table-show';
import { Step9ComponentOutput } from './components/step9-component-output/step9-component-output';
import { Step10TemplateDrivenForms } from './components/step10-template-driven-forms/step10-template-driven-forms';
import { Step11ReactiveForms } from './components/step11-reactive-forms/step11-reactive-forms';
import { Step12HttpClientService } from './components/step12-http-client-service/step12-http-client-service';
import { Step13UserLogin } from './components/step13-user-login/step13-user-login';
import { RestrictedContent } from './components/restricted-content/restricted-content';
import { authGuard } from './shared/guards/auth-guard';
import { readerRoleGuard } from './shared/guards/reader-role-guard';
import { Step14UserRegistration } from './components/step14-user-registration/step14-user-registration';

export const routes: Routes = [
  {path:'person-table-example', component:Step2PersonTable},
  {path:'component-input-example', component:Step3PersonTableInput},
  {path:'for-directive-example', component:Step4ForDirective},
  {path:'event-bind-example',component:Step5EventBind},
  {path:'simple-datatable-example', component:Step8SimpleDataTableShow},
  {path: 'component-output', component: Step9ComponentOutput},
  {path:'template-driven-form-example',component: Step10TemplateDrivenForms},
  {path:'reactive-form-example', component:Step11ReactiveForms},
  {path:'http-client-example', component: Step12HttpClientService},
  {path:'user-login', component: Step13UserLogin},
  {path:'welcome', component:Step6Welcome},
  {
   path:'restricted-content',
   component: RestrictedContent,
   canActivate: [authGuard, readerRoleGuard]
  },
  {path:'user-registration-example', component: Step14UserRegistration, canActivate:[authGuard, readerRoleGuard]},
  {path:'', redirectTo:'/welcome', pathMatch:'full'}
];