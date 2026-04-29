import { Component } from '@angular/core';
import { ManyPersons } from '../../shared/interfaces/person';
import { Step8SimpleDataTable } from '../step8-simple-data-table/step8-simple-data-table';

@Component({
  selector: 'app-step8-simple-data-table-show',
  imports: [Step8SimpleDataTable],
  templateUrl: './step8-simple-data-table-show.html',
  styleUrl: './step8-simple-data-table-show.css',
})
export class Step8SimpleDataTableShow {
  manyPersons = ManyPersons;
}
