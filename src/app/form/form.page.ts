import { Component } from '@angular/core';
import { Feedback, FeedbackServiceService } from '../services/feedback-service.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})


export class FormPage {

constructor(private feedbackService:FeedbackServiceService){}

  surveyData = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
  };


 

  submitForm() {
   let feedback:Feedback ={
      teacherName:FeedbackServiceService.teacherName ,
      q1: this.surveyData.q1,
      q2: this.surveyData.q2,
      q3: this.surveyData.q3,
      q4: this.surveyData.q4,
      q5: this.surveyData.q5
    }
    console.log(this.surveyData);

    this.feedbackService.addFeedback(feedback);
  }
}
