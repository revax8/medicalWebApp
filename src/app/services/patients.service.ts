import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
private dbPath = '/Patients';
patientsRef!: AngularFirestoreCollection<Patient>;


  constructor(private db: AngularFirestore) {
    this.patientsRef = db.collection('Patients')
  }

  addPatient(patient: Patient): any{
    return this.patientsRef.add({ ...patient})
  }
  getAll(): AngularFirestoreCollection<Patient>{
    return this.patientsRef;
  }
  delete(id: string) : Promise<void> {
    return this.db.doc(`/Patients/${id}`).delete();
  }
  update(id:string, data:any){
    console.log(id);
    console.log(data);
    return this.patientsRef.doc(id).update(data);
  }

}
