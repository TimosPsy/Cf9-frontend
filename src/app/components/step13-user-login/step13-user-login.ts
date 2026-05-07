import { Component, effect, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {jwtDecode} from 'jwt-decode'; 
import { Credentials, LoggedInUser } from '../../shared/interfaces/user-login.interface';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
// import { GoogleService } from '../../shared/services/google.service';


@Component({
  selector: 'app-step13-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './step13-user-login.html',
  styleUrl: './step13-user-login.css',
})
export class Step13UserLogin {

  userService = inject(UserService);
  router = inject(Router);
  
  user = this.userService.user;

  form  = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor() {
    // Reset form if logout happens while staying on this page.
    effect(() => {
      if (!this.userService.user()) {
        this.form.reset({
          username: '',
          password: ''
        });
      }
    });
  }

  onSubmit(){
    console.log(this.form.value);
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
         console.log(response);
         const access_token = response.token;
         localStorage.setItem('access_token', access_token)
         const decodedToken=jwtDecode(access_token) as unknown as LoggedInUser;
         console.log("DECODED TOKEN>>", decodedToken);
         this.userService.user.set({
           username: decodedToken.username,
           email: decodedToken.email,
           roles: decodedToken.roles
        });
        this.router.navigate(['restricted-content']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
