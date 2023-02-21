import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorsComponent } from './components/doctors/add-doctors.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [ 
  {path: "doctors", component : DoctorsComponent},
  {path: "patients", component: PatientsComponent},
  {path: "addDoctors", component : AddDoctorsComponent},
  {path: "init", component : InitialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
