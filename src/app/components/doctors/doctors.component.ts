import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { MedicalService } from 'src/app/services/medical.service';

@Component({
  selector: 'med-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  doctors?: any[];
  doctorsFiltered : any[];
  currentIndex = -1;
  title = '';
  message = '';
  filterValue = '';

  constructor(private medicalService: MedicalService) { }

  get filter(){
    return this.filterValue;
  }
  set filter(value){
    this.filterValue = value;
    this.doctorsFiltered = this.performFilter(value);
  }

  ngOnInit(): void {
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
      this.doctorsFiltered = data;
    });
  }
 
  deleteDoctor(id : string): void {
      this.medicalService.delete(id)
        .then(() => {
          this.message = 'The Doctor was updated successfully!';
        })
        .catch(err => console.log(err));
    }

  performFilter(value : string): any{
    value = value.toLocaleLowerCase();
    return  this.doctors?.filter (  
                                    (x: Doctor)=> x.name.toLocaleLowerCase().includes(value) 
                                )
  }
}
