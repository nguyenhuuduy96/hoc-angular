import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { Book } from '../../models/book';
import { from } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  pId: string = "0";
  
  publisher: Publisher;
  Pid:string="0";
  constructor(private publishService: PublisherService,
              private bookService: BookService,
              private route: ActivatedRoute) { 
      this.pId = this.route.snapshot.paramMap.get('pId');
     
    }
  
    // test(pId,bid){
    //   this.bookService.removeBooksidById(pId,bid).subscribe(data=>{
    //     // this.books = this.books.filter(item => item.id != data.id);
    //     this.books= this.books.filter(item => item.id != data.id);
    //   })
    // }
    test(pId,book){
      var r = confirm("Are you sure you want to delete!");
      if(r==true){
        this.bookService.removeBooksidById(pId,book).subscribe(data=>{
          // this.books = this.books.filter(item => item.id != data.id);
          this.books= this.books.filter(item => item !== book);
        })
      }
      
      
    }
  ngOnInit() {
    this.bookService.getListBooks(this.pId).subscribe(data => {
      this.books = data;
    });
    this.publishService.getPublisherById(this.pId).subscribe(data=>{
      this.publisher = data;
    })
    this.Pid = this.pId;
    // lay ra thong tin publisher
    this.publishService.getPublisherById(this.pId).subscribe(payload => {
      this.publisher = payload;
    })
  }


}
