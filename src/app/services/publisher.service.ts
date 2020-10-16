import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Publisher} from '../models/publisher';
import { from,Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  apiURL: string = 'http://5c9b2762a224170014de68ac.mockapi.io/web207/publishers';
 
  constructor(private httpClient: HttpClient) { }

 

  getListPublishers(){
    return this.httpClient.get<Publisher[]>(`${this.apiURL}`);
  }
  
  getPublisherById(pId){
    return this.httpClient.get<Publisher>(`${this.apiURL+"/" + pId}`);
  }
  updatePublisher (publishers: Publisher) {
    const id = typeof publishers === 'number' ? publishers : publishers.id;
    return this.httpClient.put(`${this.apiURL}/${id}`,publishers);
  }
  addPublisher(newObject){
    return this.httpClient.post<Publisher>(`${this.apiURL}`, newObject);
  }

  removePublisherById(pId){
    let removeUrl = this.apiURL + "/" + pId;
    return this.httpClient.delete<Publisher>(`${removeUrl}`);
  }
}
