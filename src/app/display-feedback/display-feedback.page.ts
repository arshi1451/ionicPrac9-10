import { Component, OnInit } from '@angular/core';
import { Feedback, FeedbackServiceService } from '../services/feedback-service.service';

@Component({
  selector: 'app-display-feedback',
  templateUrl: './display-feedback.page.html',
  styleUrls: ['./display-feedback.page.scss'],
})
export class DisplayFeedbackPage implements OnInit {

  constructor(private feedbackService:FeedbackServiceService) { }
  feedbackArray: Feedback[] = [];
  ngOnInit() {
    this.feedbackService.getFeedback().subscribe(res=>{
      console.log("final", res)
      this.feedbackArray = res;
    });
  }

}
