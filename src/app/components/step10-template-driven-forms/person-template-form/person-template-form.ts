import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
  onSubmit(value:any){
     console.log("Submit");
    // console.log("Form Submit", this.form?.form.get('firstname')!.value)
    // this.person.emit(value);
  }

  onSetValue(){
    console.log("Set Value");
  }
}
