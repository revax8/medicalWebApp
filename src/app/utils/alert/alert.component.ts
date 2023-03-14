import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'med-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Input() classes: string[] = [];
  @Output() cerrado  = new EventEmitter();


  close() {
    this.cerrado.emit();
  }

}
