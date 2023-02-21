import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {
  private dbPath = '/Doctors';  
  doctorsRef!: AngularFirestoreCollection<Doctor>;

  constructor(private db: AngularFirestore) {
    this.doctorsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Doctor> {
    return this.doctorsRef;
  }
  delete(id: string): Promise<void> {
    return this.db.doc(`/Doctors/${id}`).delete();
  }
  create(doctor: Doctor): any {
    return this.doctorsRef.add({ ...doctor });
  }
}
