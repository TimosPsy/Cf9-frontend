import { Component, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { 
  FormGroup, 
  FormControl,
  ReactiveFormsModule, 
  Validators, 
  FormArray 
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IUser } from '../../shared/interfaces/mongo-user.interface'

@Component({
  selector: 'app-step14-user-registration',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './step14-user-registration.html',
  styleUrl: './step14-user-registration.css',
})
export class Step14UserRegistration {
  userService = inject (UserService);

  form = new FormGroup ({
    username: new FormControl('', Validators.required),
    firstname:new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormGroup({
      area: new FormControl(''),
      street: new FormControl('')
    }),
    phone: new FormArray([
      new FormGroup({
        number: new FormControl(''),
        type: new FormControl('')
      })
    ])
  });

  phone = this.form.get('phone') as FormArray;

  onSubmit() {
    console.log(this.form.value);

    const user = this.form.value as IUser;
    this.userService.registerUser(user).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
