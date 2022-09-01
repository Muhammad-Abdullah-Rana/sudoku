import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  errCount:number = 0;
  @Input() set incrementError(err:number){
    this.errCount += err;
  }

}
