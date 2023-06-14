import { Injectable } from '@angular/core';
import{Firestore,collectionData,doc,docData,addDoc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import{collection} from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Feedback{
  teacherName:String,
  q1:String,
  q2:String,
  q3:String,
  q4:String,
  q5:String,
}
@Injectable({
  providedIn: 'root'
})


export class FeedbackServiceService {

  constructor(private firestore: Firestore) { }
  static teacherName:String="";
  addFeedback(feedback:Feedback){
    console.log(feedback);

    const feedbackDetails = collection(this.firestore,'feedbacks');
    return addDoc(feedbackDetails,feedback);

  }

  getFeedback():Observable<Feedback[]>{
    const feedbackDetails = collection(this.firestore, 'feedbacks');
    let data = collectionData(feedbackDetails, {idField:'Serial_Id'}) as Observable<Feedback[]>;
    console.log(data);
    return data;    
  }
}
