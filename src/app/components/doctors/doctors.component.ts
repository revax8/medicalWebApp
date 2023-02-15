import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'med-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  doctors?: Doctor[];
  currentDoctor?: Doctor;
  currentIndex = -1;
  title = '';
  constructor(private medicalService: MedicalService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  refreshList(): void {
    this.currentDoctor = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

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

  setActiveDoctor(tutorial: Doctor, index: number): void {
    this.currentDoctor = tutorial;
    this.currentIndex = index;
  }

}
