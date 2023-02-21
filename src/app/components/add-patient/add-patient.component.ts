import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { PatientsService } from 'src/app/services/patients.service';


@Component({
  selector: 'med-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  constructor(private patientsService: PatientsService) {}


  ngOnInIt(): void {

 }

  addPatient(nameInput: HTMLInputElement) {
    if (nameInput.value) {
    this.patientsService.addPatient(nameInput.value);
    nameInput.value = '';
  }
}
}
