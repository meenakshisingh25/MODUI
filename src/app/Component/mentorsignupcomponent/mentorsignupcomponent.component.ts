import { Component, OnInit } from '@angular/core';
import { Mentorsignupmodel } from 'src/app/Model/mentorsignupmodel';
import { MentorsignupserviceService } from 'src/app/Service/mentorsignupservice.service';

@Component({
  selector: 'app-mentorsignupcomponent',
  templateUrl: './mentorsignupcomponent.component.html',
  styleUrls: ['./mentorsignupcomponent.component.css']
})
export class MentorsignupcomponentComponent implements OnInit {
  item:Mentorsignupmodel;
  list:Mentorsignupmodel[];
  msg:string;
  constructor(private service:MentorsignupserviceService) {
    this.item= new Mentorsignupmodel();
    
   }

  ngOnInit() {
  }
  public Add(){
    this.service.Add(this.item).subscribe(k=>this.msg=k)
  }

}
