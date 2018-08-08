import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-pipe',
  templateUrl: './apply-pipe.component.html',
  styleUrls: ['./apply-pipe.component.css']
})
export class ApplyPipeComponent {

  value = 0;
  fromScale: 'kg' | 'lbs' = 'kg';
  toScale: 'kg' | 'lbs' = 'lbs';
  toggle = false;

  constructor() {}

  toggleScale() {
    this.toggle = !this.toggle;
    this.fromScale = this.toggle ?  'lbs' : 'kg';
    this.toScale = this.toggle ? 'kg' : 'lbs' ;
  }

  covertValue = (number) => {
    return this.toScale === 'kg' ? number / 2.2 : number * 2.204;
  }

}
