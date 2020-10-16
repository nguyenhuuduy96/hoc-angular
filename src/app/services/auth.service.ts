import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  apiURL: string = 'http://5c9b2762a224170014de68ac.mockapi.io/web207/users';
 
  // login(name: string, password: string) {
  //     return this.http.get<any>(`${this.apiURL}`, { name: name, password: password })
  //         .pipe(map(user => {
  //             // login successful if there's a jwt token in the response
  //             if (user && user.token) {
  //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
  //                 localStorage.setItem('currentUser', JSON.stringify(user));
  //             }

  //             return user;
  //         }));
  // }

  // logout() {
  //     // remove user from local storage to log user out
  //     localStorage.removeItem('currentUser');
  // }
}
