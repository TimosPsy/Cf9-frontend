import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { IPerson } from "../../../shared/interfaces/person"


@Component({
  selector: 'app-person-reactive-form',
  imports: [ReactiveFormsModule, 
     MatSelectModule,
     MatInputModule,
     MatFormFieldModule, 
     MatButtonModule
  ],
  templateUrl: './person-reactive-form.html',
  styleUrl: './person-reactive-form.css',
})
export class PersonReactiveForm {

  @Output() person = new EventEmitter<IPerson>()

  form = new FormGroup({
    firstname: new FormControl(' ', Validators.required),
    lastname: new FormControl(' ', Validators.required),
    email: new FormControl(' ', [Validators.required, Validators.email])
  });

    onSubmit(){
    if (this.form.valid){
      console.log("OnSubmit", this.form.value);
      this.person.emit(this.form.value as IPerson);
    }
  }

  onSetValue(){
     console.log("Set Value");
     this.form.setValue({
      firstname: "Bob",
      lastname:"Dylan",
      email:"bob@aueb.gr"
    })
  }
}
