import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-step7-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './step7-list-group-menu.html',
  styleUrl: './step7-list-group-menu.css',
})
export class Step7ListGroupMenu {
  menu = [
    { text: "Step2 Person Table", appLink:'person-table-example'},
    { text: "Step3 Component Input", appLink:'component-input-example'},
    { text: "Step4 @for Directive", appLink:'for-directive-example'},
    { text: "Step5 Event Bind", appLink:'event-bind-example'},
    { text: "Step8 Simple Datatable", appLink:'simple-datatable-example'},
    { text: "Step9 Output Example", appLink: 'component-output-example'},
    { text: "Step10 Template Forms", appLink:'template-driven-form-example'},
    { text: "Step11 Reactive forms", appLink:'reactive-form-example'},
    { text: "Step12 Http Client", appLink: 'http-client-example'},
    { text: "Step13 User Login", appLink: 'user-login'},
    { text: "Restricted Content", appLink: 'restricted-content'}
  ]
}
