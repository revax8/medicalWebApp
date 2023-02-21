import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { MedicalService } from 'src/app/services/medical.service';

function experienceRangeValidation (c: AbstractControl) : {[key:string] : boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value >5)){
    return { 'range' : true}
  }
  return null
}
@Component({
  selector: 'med-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit{
  doctorFormGroup!: FormGroup;
  doctor = new Doctor();
  showMessage : boolean = false;


constructor(private router: Router, private fb : FormBuilder, private medicalService : MedicalService){

}
  ngOnInit(): void {
    this.doctorFormGroup = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      lastName : ['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.email, Validators.required]],
      phone : '',
      required :  false,
      experience : [null, experienceRangeValidation],
    })
  }
  onBack(): void{
    this.router.navigate(["/doctors"])
  }

  save(): void {
    var p = {...this.doctor, ...this.doctorFormGroup.value};
    this.medicalService.create(p).then(() => {
      console.log('Created new item successfully!');
    });
  }

  setNotification(e : any): void {
    const phoneFormControl = this.doctorFormGroup.get('phone');
    if (e.target?.checked) {
      this.showMessage = true;
      phoneFormControl?.setValidators(Validators.required);
    } else {
      this.showMessage = false;
      phoneFormControl?.clearValidators();
    }
    phoneFormControl?.updateValueAndValidity(); 
    
  }

}
