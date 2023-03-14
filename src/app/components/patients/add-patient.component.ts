import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient.model';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'med-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit{
  patientFormGroup!: FormGroup;
  pageTitle = 'Add Patient';
  alertMessage = '';
  patient: Patient
  constructor(private fb : FormBuilder
              ,private patientService: PatientsService
              ,private router: Router
    ){

  }

ngOnInit(): void {
  this.patientFormGroup = this.fb.group(
    {
      name: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['',[Validators.required]],
      email: ['',[Validators.email,Validators.required]]
    })

    if (history.state.id) {
      this.displayPatient(history.state);
    }
}

save(): void{
var patientObj = {...this.patient, ...this.patientFormGroup.value};
if (history.state.id) {
  this.patientService.update(history.state.id, patientObj)
  this.showAlert();
}
else{
  this.patientService.addPatient(patientObj).then(() =>
  {
    console.log('Created correctly');
    this.showAlert();
  }
  )
}

}

getData() : void{
this.patientService.getAll();
}


displayPatient(patient: Patient): void{
  if (this.patientFormGroup) {
    this.patientFormGroup.reset();
  }
  this.patient = patient;

  if (patient.name) {
    this.pageTitle = 'Edit Patient';
  }


  this.patientFormGroup.patchValue({
    name: this.patient.name,
    lastName: this.patient.lastName,
    email: this.patient.email,
    phoneNumber: this.patient.phoneNumber
  })

}

onBack(): void{
this.router.navigate(['/patients'])
}
closeMedAlert(): void {
this.alertMessage = '';
this.router.navigate(['/patients'])
}
showAlert() {
  this.alertMessage = 'Saved Successfully';
}



}
