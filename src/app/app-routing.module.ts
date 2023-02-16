import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';

const routes: Routes = [ 
  {path: "doctors", component : DoctorsComponent},
  {path: "patients", component: PatientsComponent},
  {path: "add", component: CreatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
