import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {AsyncInput} from '../../../../projects/ngx-mix/src/lib/metadata/async-input';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  templateUrl: './async-input.html',
  selector: 'app-async-input-component',
  styles: ['.selected {color: red}']
})
export class AsyncInputComponent {
  @Input() @AsyncInput()
  index: Observable<number>;
  indices: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  isSelected(currentIndex) {
    return this.index.pipe(map(i => i % this.indices.length === currentIndex ));
  }

  trackByFn(index, item) {
    return index;
  }

}
