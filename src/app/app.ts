import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step2PersonTable } from './components/step2-person-table/step2-person-table';
import { Step3PersonTableInput } from './components/step3-person-table-input/step3-person-table-input';
import { Step4ForDirective } from './components/step4-for-directive/step4-for-directive';
import { Step5EventBind } from './components/step5-event-bind/step5-event-bind';

import { IPerson } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Step2PersonTable,
    Step3PersonTableInput,
    Step4ForDirective,
    Step5EventBind],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cf9-frontend');
  user = {
    firstname: 'Bob',
    lastname: 'Dylan',
    email: 'bob.dylan@aueb.gr'
  }

  // Step3 Pass data to child step3 component
  Person1: IPerson = {
    firstname: "firstname1",
    lastname: "lastname1",
    email: "lastname1@aueb.gr"
  }

  Person2: IPerson = {
    firstname:"firstname2",
    lastname:"lastname2",
    email: "lastname2@aueb.gr"
  }

  doNotShowComponents: boolean = true;
  
}
