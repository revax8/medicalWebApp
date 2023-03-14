import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Patient } from 'src/app/models/patient.model';
import { PatientsService } from 'src/app/services/patients.service';
import {Router } from '@angular/router';


@Component({
  selector: 'med-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
_filter = "";
patients?: any[];
filteredPatients?: any[];

  constructor(private patientService: PatientsService,
              private router : Router ) { }

get filter(){
  return this._filter;
}
set filter(value){
this._filter= value;
this.filterData(value);
}

  ngOnInit(): void {
    this.retrievePatients();
  }




  retrievePatients(): void {
    this.patientService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
          )
        )
    ).subscribe(data => {
      this.patients= data;
      this.filteredPatients= data;
    });
  }

  filterData(value: string): void{
    value = value.toLocaleLowerCase();
this.filteredPatients = this.patients?.filter( (pati : Patient) =>
pati.name.toLocaleLowerCase().includes(value))

  }

  sendData(patient: Patient):void{
    this.router.navigateByUrl('/addPatient', {state: patient})
  }

  deleteData(id: string): void{
      this.patientService.delete(id);

  }

  }
