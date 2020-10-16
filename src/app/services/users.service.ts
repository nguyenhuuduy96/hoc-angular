import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL: string = 'http://5c9b2762a224170014de68ac.mockapi.io/web207/users';
 
  constructor(private httpClient: HttpClient) { }
  adduser(newObject){
    return this.httpClient.post<User>(`${this.apiURL}`, newObject);
  }
}
