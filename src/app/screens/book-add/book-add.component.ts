import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Publisher } from 'src/app/models/publisher';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {nameValidator,spacesValidator} from '../../Validators'
import { first } from 'rxjs/operators';
import { Book } from '../../models/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  submitted = false;
  publisher: Publisher;
  pid:string="0";
constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private route:ActivatedRoute,
      private publisherService: PublisherService,
      private BkService: BookService,
   
) {
  this.pid = this.route.snapshot.paramMap.get('pId');
 }

ngOnInit() {
  this.publisherService.getPublisherById(this.pid).subscribe(data=>{
    this.publisher=data;
  })
  this.pid=this.pid;
  this.addValidateForm();
}
addValidateForm(){
  this.createForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      spacesValidator
    ]),
    image: new FormControl('', [
      Validators.required,
      spacesValidator
    ]),
    detail: new FormControl('', [
      Validators.required,
      spacesValidator
      
    ]),
    price: new FormControl('', [
      Validators.required,
      
    ]),
    author: new FormControl('', [
      Validators.required,
      
    ])
  });
}

onSubmit() {
  let data = {
  name: this.createForm.controls.name.value, 
  image: this.createForm.controls.image.value, 
  detail: this.createForm.controls. detail.value, 
  price: this.createForm.controls.price.value,
  author: this.createForm.controls.author.value
  };
  this.submitted = true;
  if (this.createForm.invalid) {
      return;
  }
  this.loading = true;

  this.BkService.addBooksr(this.pid,data).subscribe(data => {       
    this.router.navigate([`publishers/${this.pid}/books`])
    });
    }
  
}

