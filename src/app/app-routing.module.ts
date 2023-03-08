import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorsComponent } from './components/doctors/add-doctors.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { PatientsComponent } from './components/patients/patients.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SigninRedirectCallbackComponent } from './menu/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './menu/signout-redirect-callback.component';
import { AuthGuard } from './utils/Guards/auth.guard';

const routes: Routes = [
  {path: "doctors", component : DoctorsComponent, canActivate: [AuthGuard]},
  {path: "patients", component: PatientsComponent},
  {path: "addDoctors", component : AddDoctorsComponent},
  {path: "init", component : InitialPageComponent},
  {path: "updateDoctor", component: AddDoctorsComponent},
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
  { path: '', component: InitialPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
