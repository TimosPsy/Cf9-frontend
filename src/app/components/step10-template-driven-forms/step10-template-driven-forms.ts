import { Component } from '@angular/core';
import { PersonTemplateForm } from './person-template-form/person-template-form';


@Component({
  selector: 'app-step10-template-driven-forms',
  imports: [PersonTemplateForm],
  templateUrl: './step10-template-driven-forms.html',
  styleUrl: './step10-template-driven-forms.css',
})
export class Step10TemplateDrivenForms {}
