import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Patients } from './patients';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private dbPath = '/Patients';

  patientsReference: AngularFirestoreCollection<Patients>;

  constructor(private afs: AngularFirestore) {
    this.patientsReference = afs.collection(this.dbPath);
  }

  getAllPatients() {
    return this.patientsReference.valueChanges();
  }
}
