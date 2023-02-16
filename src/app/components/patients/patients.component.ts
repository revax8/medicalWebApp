import { Component } from '@angular/core';
import { getFirestore, doc, getDocs } from 'firebase/firestore';
import { Patients } from 'src/app/patients';
import { PatientsService } from 'src/app/patients.service';

@Component({
  selector: 'med-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  
  patientsList : Patients[] = [];

  constructor(private patients: PatientsService) {}

  ngOnInIt(): void {}

  getAllPatients() {
    this.patients.getAllPatients().subscribe(res => {

        this.patientsList = res.map((e: any) => {
          const patients = e.payload.doc.data();
          patients.id = e.payload.doc.id;
          return patients;
        })
    }
  )}
}
