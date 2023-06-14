import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { DataService, Student } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: any = [];
  constructor(private dataService:DataService , private alertCtrl:AlertController ,private modalCtrl: ModalController) {
    this.dataService.getStudents().subscribe(res =>{
      console.log(res);
      this.students = res;
      
    });
     
  }

  


  async openStudentList(studentData:Student)
  {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps:{id: studentData.Ucid},
      breakpoints: [ 0 , 0.5 , 0.8],
      initialBreakpoint: 0.5
    });
    DataService.student = studentData
    console.log(studentData.name)
    modal.present();
  }
 async addNote()
  {
    const alert = await this.alertCtrl.create({
      header:'Add Student',
      inputs:[
        {
          name : 'Name',
          placeholder: 'Enter your Name',
          type: 'text',
          attributes:{
            required:true,
          }
          
        },
        {
          name : 'UCID',
          placeholder: 'Enter your UCID',
          type: 'textarea',
          attributes:{
            required:true,
          }
        },
        {
          name: "Feedback",
          placeholder: "Enter the feedback",
          type: 'textarea',
          attributes:{
            required:true,
          }

        },


      ],
      buttons:[
        {
          text: 'cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler:async(res) => {
            if (res.Name && res.UCID && res.Feedback) {
              await this.dataService.addStudent({ name: res.Name, Ucid: res.UCID, feedback: res.Feedback });
              alert.dismiss();
            } else {
              // Show an error message to the user indicating that all fields are required
              const errorAlert = await this.alertCtrl.create({
                header: 'Error',
                message: 'Please fill in all fields.',
                buttons: ['OK']
              });
              await errorAlert.present();
            }
          }
        }

     ]

    });

    await alert.present();
  }

}
