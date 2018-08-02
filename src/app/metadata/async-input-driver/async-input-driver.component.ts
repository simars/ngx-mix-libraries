import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-async-input-driver',
  templateUrl: './async-input-driver.component.html',
  styleUrls: ['./async-input-driver.component.css']
})
export class AsyncInputDriverComponent implements OnInit, OnDestroy {
  value$: Observable<number> = interval(1000);
  sub: Subscription;
  value = 1;
  ngOnInit(): void {
    this.sub = this.value$.subscribe((v) => this.value = v);
  }

  tracByFn(index, item) {
    return index;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
