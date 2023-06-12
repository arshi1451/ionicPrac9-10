import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import{provideFirebaseApp , initializeApp} from '@angular/fire/app';
import{ getFirestore , provideFirestore} from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  provideFirebaseApp(()=> initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  provideFirestore(()=> getFirestore()),
  provideStorage(() => getStorage())
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
