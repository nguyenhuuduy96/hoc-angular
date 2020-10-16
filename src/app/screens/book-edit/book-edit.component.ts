import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { Book } from '../../models/book';
import {Router} from "@angular/router"
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: string = "0";
  pid :string="0";
  books:Book;
  book:Book[];
 
  constructor(private publishService: PublisherService,
              private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { 
      this.pid = this.route.snapshot.paramMap.get('pId');
     this.id = this.route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
      const id=this.id;
      const pid=this.pid;
      this.bookService.getLBooksid(pid,id).subscribe(data=>{
        this.book=data;
      }) 
      this.pid=this.pid;     
    }
  

    saveForm(){
      this.bookService.editListBooksid(this.pid,this.id,this.book).subscribe(data => {
              // console.log(data);
        this.router.navigate([`publishers/${this.pid}/books`])
      
    });
    }

}
