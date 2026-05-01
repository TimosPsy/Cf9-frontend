import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IPerson } from '../../../shared/interfaces/person';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-person-template-form',
  imports: [
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './person-template-form.html',
  styleUrl: './person-template-form.css',
})
export class PersonTemplateForm {

  @Output() person = new EventEmitter<IPerson>(); 
  @ViewChild('eForm', {static:false}) form:NgForm | undefined;

  ngAfterViewInit(){
    setTimeout(()=>{
      this.form?.setValue({
        firstname: "Bob",
        lastname: "Dylan",
        email:"bob@aueb.gr"
      });  
    },100)
  }

  onSubmit(value:any){
     console.log("Submit");
    // console.log("Form Submit", this.form?.form.get('firstname')!.value)
     this.person.emit(value);
  }

  onSetValue(){
    console.log("Set Value");
    this.form?.setValue({
      firstname: "Timos",
      lastname: "psixo",
      email: "tim@aueb.gr"
    })
  }
}
