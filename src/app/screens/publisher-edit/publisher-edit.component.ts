import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {PublisherService} from '../../services/publisher.service'
import {nameValidator,spaceValidator} from '../../Validators'
import { Publisher } from 'src/app/models/publisher';
@Component({
  selector: 'app-publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.css']
})
export class PublisherEditComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  submitted = false;
  id:String="0";
  publisher: Publisher;
  constructor(private publishService: PublisherService,
              private router: Router,
              private route: ActivatedRoute) {
                this.id = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit() {
    this.publishService.getPublisherById(this.id).subscribe(data => {
      this.publisher = data;
    });  
    this.addValidateForm();
  }
  addValidateForm(){
    this.createForm = new FormGroup({
  		name: new FormControl('', [
  			Validators.required,
  			spaceValidator
  		]),
  		avatar: new FormControl('', [
  			Validators.required
  		]),
  		address: new FormControl('', [
  			Validators.required,
  			spaceValidator
  		]),
  		description: new FormControl('', [
  			Validators.required,
  			
  		])
  	});
  }
  editForm(){
    
    this.submitted = true;
    if (this.createForm.invalid) {
        return;
    }
    this.loading=true;
    this.publishService.updatePublisher(this.publisher).subscribe(data => {
              
        this.router.navigate(['/'])
      
    });
}
}
