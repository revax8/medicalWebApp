import { Component, Input, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'med-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges{
  @Input() experience : number = 14;
cropWidth = 75;

ngOnChanges() : void {
  this.cropWidth = this.experience*75/5;

}

}
