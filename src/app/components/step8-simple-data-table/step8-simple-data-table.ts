import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';
import { sortBy } from 'lodash-es';


@Component({
  selector: 'app-step8-simple-data-table',
  imports: [],
  templateUrl: './step8-simple-data-table.html',
  styleUrl: './step8-simple-data-table.css',
})
export class Step8SimpleDataTable {
  @Input() data: IPerson[] | undefined;
  @Output() personClicked = new EventEmitter<IPerson>();

  ngOnInit(){
    // console.log("NG ON INIT 1>>>", this.sortOrder);
    // this.sortOrder['firstname'] = 'asc';
    // this.data = sortBy(this.data, 'firstname');
     this.sortData('firstname');
    // console.log("NG ON INIT 2>>>", this.data);
  };

  ngOnChanges(changes: SimpleChanges) {
    // console.log("Changes>>",changes)
    // console.log("Changes Data>>",changes['data'])
    if (changes['data'] && this.data) {
      // console.log("On If", this.data);
      this.sortData('firstname')
    }
  };


  sortOrder = {
    firstname: 'none',
    lastname: 'none',
    email: 'none'
  };

  sortData(sortKey: keyof IPerson) {
    console.log("STEP 8", this.data);
    // console.log("SortData", this.sortOrder[sortKey], sortKey);
    if (this.sortOrder[sortKey] === 'asc') {
      this.sortOrder[sortKey]='desc';
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }
    console.log("SortOrder", this.sortOrder);
  }

  onPersonClicked(person: IPerson) {
    this.personClicked.emit(person);
  }
}
