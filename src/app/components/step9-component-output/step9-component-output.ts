import { Component } from '@angular/core';
import { IPerson, ManyPersons } from '../../shared/interfaces/person';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';

@Component({
  selector: 'app-step9-component-output',
  imports: [Step8SimpleDataTable],
  templateUrl: './step9-component-output.html',
  styleUrl: './step9-component-output.css',
})
export class Step9ComponentOutput {
  manyPersons = ManyPersons

  showPersonFromChild(data: IPerson) {
    console.log("Step9", data);
    alert(this.personTemplate(data));
  }

  personTemplate(data: IPerson) {
    return `Person Details:
    FirstName: ${data.firstname}
    Lastname: ${data.lastname}
    Email: ${data.email}`
  }
}
