import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'med-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent {
constructor(private router: Router){

}
  onBack(): void{
    this.router.navigate(["/doctors"])
  }
}
