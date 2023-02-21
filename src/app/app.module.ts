import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/enviroment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddDoctorsComponent } from './components/doctors/add-doctors.component';
import { StarsComponent } from './utils/stars/stars.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    PatientsComponent,
    MenuComponent,
    AddDoctorsComponent,
    StarsComponent,
    AddPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class AppModule {}
