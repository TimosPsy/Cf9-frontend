import { effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Credentials, LoggedInUser } from '../interfaces/user-login.interface';
import { HttpClient } from '@angular/common/http';


const API_AUTH_URL = `${environment.apiURL}/api/auth`;

@Injectable({
  providedIn: 'root',
})
export class UserService {

  http:HttpClient = inject(HttpClient);

  user = signal<LoggedInUser | null>(null);

    constructor(){
    // const access_token = localStorage.getItem('access_token');
    // if (access_token){
    //   const decodedToken = jwtDecode(access_token) as unknown as LoggedInUser
    //   this.user.set({
    //     username: decodedToken.username,
    //     email: decodedToken.email,
    //     roles: decodedToken.roles
    //   });
    // }

    effect(()=>{
      if (this.user()){
        console.log("User Logged in:", this.user()?.username);
      } else {
        console.log('No user logged in');
      }
    })
  }

  loginUser(data: Credentials) {

    return this.http.post<{token:string, user:{id:string, username:string}}>(
      `${API_AUTH_URL}/login`, 
      data
    )
  };
}
