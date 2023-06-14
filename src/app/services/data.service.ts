import { Injectable } from '@angular/core';
import{Firestore,collectionData,doc,docData,addDoc, deleteDoc, updateDoc} from '@angular/fire/firestore';
import{collection} from '@firebase/firestore';
////import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Student{
  id?: String;
  name : String;
  Ucid: string;
  feedback: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  static student:Student;
  getStudents(): Observable<Student[]>
  {
    const studDetails = collection(this.firestore, 'students');
    return collectionData(studDetails, {idField:'Serial_Id'}) as Observable<Student[]>;
  }

  getStudentsById(id: any): Observable<Student[]>
  {
    const studDetailsbyid = doc(this.firestore, `students/${id}`);
    return docData(studDetailsbyid, {idField:'id'}) as Observable<Student[]>;
  }

  addStudent(student:Student )
  {
    console.log(student.name);

    const studDetails = collection(this.firestore,'students');
    return addDoc(studDetails,student);
  }

  deleteStudent()
  {
    console.log(DataService.student.name);
    const documentRef = doc(this.firestore,"students","zz7Uea0JNbVKbv6ii3Jr");
    deleteDoc(documentRef)
    .then(() => {
      console.log('Document deleted successfully.');
    })
    .catch((error) => {
      console.error('Error deleting document:', error);
    });
  }

  updateStudent()
  {
    const studDetailsbyid = doc(this.firestore,`students/${DataService.student.id}`);
    return updateDoc(studDetailsbyid,{name:DataService.student.name, Ucid: DataService.student.Ucid});
  }

}
