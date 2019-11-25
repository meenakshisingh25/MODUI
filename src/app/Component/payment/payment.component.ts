// import { Component, OnInit } from '@angular/core';
// import { Trainingmodel } from 'src/app/Model/trainingmodel';
// import { Mentorsignupmodel } from 'src/app/Model/mentorsignupmodel';
// import { Skillmodel } from 'src/app/Model/skillmodel';
// import { TrainingserviceService } from 'src/app/Service/trainingservice.service';
// import { UsersigninserviceService } from 'src/app/Service/usersigninservice.service';
// import { SkillserviceService } from 'src/app/Service/skillservice.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements OnInit {
//   item:Trainingmodel;
//   list:Trainingmodel[];
//   item1:Mentorsignupmodel;
//   list1:Mentorsignupmodel[];
//   list2:Skillmodel[];
//   SkillId:string[]=[];
//   list3:number[]=[];
//   fee:number[]=[];

//   userid;

// currentdate=new Date();
// //.........................................................................
//   val1="";
//   msg:string;

//   technology;
// timestart;
// count;



// constructor(private service:TrainingserviceService, private service1 : UsersigninserviceService,private service2:SkillserviceService) 
// { 
//   this.item= new Trainingmodel();
// }

// public isCollapsed = false;
// ngOnInit() {

//   this.service2.GetAll().subscribe(data=>this.list2=data)
// }
// onSubmit(){
//   this.service1.SearchMentor(this.technology,this.timestart).subscribe(k=>{
//     this.list1=k;
//     k.forEach(element => {
//       console.log(element)
//           this.service2.GetName(element.mentor_Primary_Skill).subscribe(j=>{
//               if(j!=null){
//                 this.fee.push(j.fee)
//               }
//               else{
//                 this.fee.push(null)
//               }})
//     });
//     if(this.fee!=null){
//       this.count= k.length;
//     }
//     else{
//       this.count=0;
//     }
//   });
// }

// }


