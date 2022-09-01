import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent  {
  numberToInput:number = -1;
  numbers:number[];
  constructor(service:GameService) {
    this.numbers = Array.from(Array(9).keys());
  }
  check(event:any){
    if(this.numberToInput>-1){
      event.target!.innerHTML = this.numberToInput;
    }
  }
  @Input() set selectedNumb(numberToInput:number){
    this.numberToInput = numberToInput;
  }
}
