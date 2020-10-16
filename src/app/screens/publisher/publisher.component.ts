import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import {Publisher} from '../../models/publisher';
@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})


export class PublisherComponent implements OnInit {
  publishers: Publisher[];
  nameFilter: any = { name: '' };
 
  constructor(private publishService: PublisherService) { }

  ngOnInit() {
    this.publishService.getListPublishers().subscribe((res) => {
         this.publishers = res;
    });

  }

  removePublisher(pId){
    var r = confirm("Are you sure you want to delete!");
    if(r==true){
      this.publishService.removePublisherById(pId).subscribe(data => {
        this.publishers = this.publishers.filter(item => item.id != data.id);
      })
    }
    // this.publishService.removePublisherById(pId).subscribe(data => {
    //   this.publishers = this.publishers.filter(item => item.id != data.id);
    // })
  }

  

}
