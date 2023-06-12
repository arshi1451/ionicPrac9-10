import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(public navCntrl: NavController, private auth: Auth,private router:Router) {}

  async login() {
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    console.log(user);
    this.gotoHome();
  }


  gotoHome(){
    this.router.navigateByUrl("/tabs");

  }
  gotoSignup() {
    this.router.navigateByUrl("/signup");

    // this.navCntrl.navigateForward('signup');
  }
}