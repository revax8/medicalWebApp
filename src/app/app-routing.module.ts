import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './components/doctors/doctors.component';

const routes: Routes = [ {path: "doctors", component : DoctorsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
