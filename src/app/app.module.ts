import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/enviroment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule {}
