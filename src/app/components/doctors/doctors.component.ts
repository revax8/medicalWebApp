import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'med-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  doctors?: any[];
  currentDoctor: Doctor = {
    name: '',
    lastName: ''    
  };
  currentIndex = -1;
  title = '';
  message = '';

  constructor(private medicalService: MedicalService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  // refreshList(): void {
  //   this.currentDoctor = undefined;
  //   this.currentIndex = -1;
  //   this.retrieveTutorials();
  // }

  retrieveTutorials(): void {    
    this.medicalService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.doctors = data;
    });
  }
 
  deleteDoctor(id : string): void {
    
      this.medicalService.delete(id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The Doctor was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  


  setActiveDoctor(tutorial: Doctor, index: number): void {
    this.currentDoctor = tutorial;
    this.currentIndex = index;
  }

}
