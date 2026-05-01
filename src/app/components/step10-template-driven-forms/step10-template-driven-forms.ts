import { Component } from '@angular/core';
import { PersonTemplateForm } from './person-template-form/person-template-form';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step10-template-driven-forms',
  imports: [PersonTemplateForm,
    Step3PersonTableInput,
    Step8SimpleDataTable
  ],
  templateUrl: './step10-template-driven-forms.html',
  styleUrl: './step10-template-driven-forms.css',
})
export class Step10TemplateDrivenForms {
  currentPerson: IPerson | undefined;
  persons: IPerson[] = [];

  onPerson(data: IPerson) {
    this.currentPerson = data;
    //this.persons.push(data);
    this.persons = [...this.persons, data];
  }
}
