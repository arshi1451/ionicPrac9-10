import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackServiceService } from '../services/feedback-service.service';
interface ListItem{
  name:String,
  designation:String,
  email:String,
  phone:String,
  domain:String,
  image:String,

}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private router:Router,private feedbackService:FeedbackServiceService) { }

  ngOnInit() {
  }


  goToFeedbackPage(index:number){
    console.log("navigate : FEEDBACK")
    FeedbackServiceService.teacherName = this.items[index].name;
    this.router.navigateByUrl("form");
  }

  items :ListItem[] = [
 
    {
    name:"Prof. Harshil Kanakia",
    designation:"Asst. Professor",
    email:"harshil.kanakia@gmail.com",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png"
  },
  {
    name:"Prof. Nikhita Mangaonkar",
    designation:"Asst. Professor",
    email:"nikhita.mangaonkar@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg"
  },
  {
    name:"Prof. Dr. Pooja Raundale",
    designation:"Professor",
    email:"pooja@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg"
  },
  {
    name:"Prof. S G Vaidya",
    designation:"Asst. Professor",
    email:"sampat.vaidya@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SG-150x150.png"
  }
  ,
  {
    name:"Prof. Pallavi Thakur",
    designation:"Asst. Professor",
    email:"pallavi.thakur@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png"
  }
  ,
  {
    name:"Prof. Dr. Aarti Karande",
    designation:"Asst. Professor",
    email:"aarti.karande@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png"
  }
  ,
  {
    name:"Prof. Sonali Wankhede",
    designation:"Asst. Professor",
    email:"sonali.wankhede@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SW-150x150.png"
  }
  ,
  {
    name:"Prof. Sparsh Vyas",
    designation:"Asst. Professor",
    email:"sparsh.vyas@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SV-150x150.png"
  }
  ];
}
