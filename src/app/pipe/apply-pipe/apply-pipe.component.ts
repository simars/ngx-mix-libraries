import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-pipe',
  templateUrl: './apply-pipe.component.html',
  styleUrls: ['./apply-pipe.component.css']
})
export class ApplyPipeComponent {

  constructor() { }

  fib = [1, 2, 3, 5, 8, 13];

  public sum(collection: [number]): number {
    return collection.reduce((first, second) => first + second);
  }

}
