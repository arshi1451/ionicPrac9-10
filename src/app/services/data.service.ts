import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, getDocs, query, QuerySnapshot, updateDoc, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Student {
  id?: string;
  name: string;
  Ucid: string;
  feedback: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  static student: Student;

  getStudents(): Observable<Student[]> {
    const studDetails = collection(this.firestore, 'students');
    return collectionData(studDetails, { idField: 'Serial_Id' }) as Observable<Student[]>;
  }

  getStudentsById(id: any): Observable<Student[]> {
    const studDetailsbyid = doc(this.firestore, `students/${id}`);
    return docData(studDetailsbyid, { idField: 'id' }) as Observable<Student[]>;
  }

  addStudent(student: Student) {
    console.log(student.name);
    const studDetails = collection(this.firestore, 'students');
    return addDoc(studDetails, student);
  }


  deleteStudentByUcid(ucid: string): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const studentsCollection = collection(this.firestore, 'students');

        // Query the collection to find the document with the matching UCID
        const q = query(studentsCollection, where('Ucid', '==', ucid));
        const querySnapshot: QuerySnapshot = await getDocs(q);

        // Check if a matching document is found
        if (querySnapshot.size > 0) {
          // Delete the first matching document found (assuming UCID is unique)
          const documentRef = doc(this.firestore, 'students', querySnapshot.docs[0].id);
          await deleteDoc(documentRef);
          resolve();
        } else {
          reject(new Error('No student with the specified UCID found.'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }


  deleteStudent(id: string) {
    console.log(`Deleting student with ID: ${id}`);
    const documentRef = doc(this.firestore, 'students', id);
    return deleteDoc(documentRef)
      .then(() => {
        console.log('Document deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting document:', error);
      });
  }

  updateStudent() {
    const studDetailsbyid = doc(this.firestore, `students/${DataService.student.id}`);
    return updateDoc(studDetailsbyid, { name: DataService.student.name, Ucid: DataService.student.Ucid });
  }
}
