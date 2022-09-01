import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent  {
  numbers:number[] = [1,2,3,4,5,6,7,8,9];
  constructor() {
  }
@Output() selectedNumb: EventEmitter<number> = new EventEmitter();
}
