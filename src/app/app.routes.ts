import { Routes } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';
import { Step6Welcome } from './components/step6-welcome/step6-welcome';
//import { Step8SimpleDataTableShow } from './components/step8-simple-data-table-show/step8-simple-data-table-show';

export const routes: Routes = [
  {path:'person-table-example', component:Step2PersonTable},
  {path:'component-input-example', component:Step3PersonTableInput},
  {path:'for-directive-example', component:Step4ForDirective},
  {path:'event-bind-example',component:Step5EventBind},
  //{path:'simple-datatable-example', component:Step8SimpleDataTableShow},
  {path:'welcome', component:Step6Welcome},
  {path:'', redirectTo:'/welcome', pathMatch:'full'}
];