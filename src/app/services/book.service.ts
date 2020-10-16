import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Book} from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  filter(arg0: (item: any) => boolean): BookService {
    throw new Error("Method not implemented.");
  }
  apiURL: string = 'http://5c9b2762a224170014de68ac.mockapi.io/web207/publishers';
  constructor(private httpClient: HttpClient) { }

  getListBooks(pId){
    return this.httpClient.get<Book[]>(`${this.apiURL + "/" + pId}/books`);
  }
  addBooksr(pid,newObject){
    return this.httpClient.post<Book[]>(`${this.apiURL + "/" + pid}/books`, newObject);
  }
  // getListBooksid(pId,book:Book){
  //   const id = typeof book === 'number' ? book : book.id;
  //   return this.httpClient.get<Book[]>(`${this.apiURL + "/" + pId}/books/${id}`);
  // }
  getLBooksid(pId,id){   
    return this.httpClient.get<Book[]>(`${this.apiURL + "/" + pId}/books/${id}`);
  }
  editListBooksid(pId,id,book){
    // const id = typeof book === 'number' ? book : book.id;
    return this.httpClient.put<Book[]>(`${this.apiURL + "/" + pId}/books/${id}`,book);
  }
  // removeBooksidById(pId,bid){
      
  //     return this.httpClient.delete<Book[]>(`${this.apiURL + "/" + pId}/books/${bid}`);
  //   }
  removeBooksidById(pId,book:Book){
    const id = typeof book === 'number' ? book : book.id;
    return this.httpClient.delete<Book[]>(`${this.apiURL + "/" + pId}/books/${id}`);
  }
}