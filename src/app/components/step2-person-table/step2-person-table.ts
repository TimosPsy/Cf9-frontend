import { Component } from '@angular/core';

@Component({
  selector: 'app-step2-person-table',
  imports: [],
  templateUrl: './step2-person-table.html',
  styleUrl: './step2-person-table.css',
})
export class Step2PersonTable {
  user = {
    firstname: "George",
    lastname: "Best",
    email: "gbest7@gmail.com"
  }
}
