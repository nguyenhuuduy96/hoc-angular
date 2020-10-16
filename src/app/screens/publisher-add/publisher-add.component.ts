import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {PublisherService} from '../../services/publisher.service'
import {nameValidator,spaceValidator,urlValidator,spacesValidator} from '../../Validators'
import { first } from 'rxjs/operators';

import { from } from 'rxjs';
@Component({
  selector: 'app-publisher-add',
  templateUrl: './publisher-add.component.html',
  styleUrls: ['./publisher-add.component.css']
})
export class PublisherAddComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private pbsService: PublisherService,
              private router: Router) { }

  ngOnInit() {
    this.addValidateForm();
  }

  addValidateForm(){
    this.createForm = new FormGroup({
  		name: new FormControl('', [
  			Validators.required,
  			spaceValidator
  		]),
  		avatar: new FormControl('', [
  			Validators.required,
  			spacesValidator
  		]),
  		address: new FormControl('', [
  			Validators.required,
  			spacesValidator
  		]),
  		description: new FormControl('', [
  			Validators.required,
  			
  		])
  	});
  }

  saveForm(){
    let data = {
      name: this.createForm.controls.name.value, 
      avatar: this.createForm.controls.avatar.value, 
      address: this.createForm.controls. address.value, 
      description: this.createForm.controls.description.value
    };
    this.submitted = true;
    if (this.createForm.invalid) {
        return;
    }
    this.loading=true;  
    this.pbsService.addPublisher(data).subscribe(data => {
      if(data.id != undefined){        
        this.router.navigate(['/'])
      }
    });
  }

}


