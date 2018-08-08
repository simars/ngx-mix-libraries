import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-pure-pipe',
  templateUrl: './apply-pure-pipe.component.html',
  styles: []
})
export class ApplyPurePipeComponent {

  constructor() { }

  fib = [1, 2];
  color: 'red' | 'green' = 'green'; // red if existing array of is modified, green if new array of fib is created

  pushNextNumber() {
    const lastIndex = this.fib.length - 1 ;
    this.fib.push(this.fib[lastIndex] + this.fib[lastIndex - 1]);
    this.color = 'red';
  }

  recreateWithNextNumber() {
    const lastIndex = this.fib.length - 1 ;
    this.fib = [...this.fib, this.fib[lastIndex] + this.fib[lastIndex - 1] ];
    this.color = 'green';
  }

  public sum(collection: [number]): number {
    return collection.reduce((first, second) => first + second);
  }

}

