import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  pageTitle = 'Add Doctor';
  showMessage : boolean = false;


constructor(private router: Router,
            private fb : FormBuilder,
            private medicalService : MedicalService,
            private activatedRoute : ActivatedRoute ){
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

    if (history.state.id)
    this.displayDoctor(history.state);
  }
  onBack(): void{
    this.router.navigate(["/doctors"])
  }

  displayDoctor(doctor:Doctor) : void {
    if (this.doctorFormGroup) {
      this.doctorFormGroup.reset();
    }
    this.doctor = doctor;
    if (doctor.name) {
      this.pageTitle = 'Edit Doctor';
    }else {
      this.pageTitle = 'Add doctor';
    }

    this.doctorFormGroup.patchValue({
      name: this.doctor.name,
      lastName: this.doctor.lastName,
      email: this.doctor.email,
      phone: this.doctor.phone,
      required: this.doctor.required,
      experience: this.doctor.experience
    }

    )

  }

  retrieveDoctor():void{
this.medicalService.getAll

  }
  save(): void {
        var p = {...this.doctor, ...this.doctorFormGroup.value};

        if (history.state.id){
        this.medicalService.update(history.state.id,p)
        }else {
        this.medicalService.create(p).then(() => {
        console.log('Created new item successfully!');
         });
        }
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
