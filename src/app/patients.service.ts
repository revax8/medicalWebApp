import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private db: AngularFirestore) {}

  getAllPatients(name: string) {
    const dbConnection = collection(this.db, 'Patients');
    getDoc(dbConnection, string).then(() => {
      alert('Data Sent');
    })
  }
 
}
