import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'applyPure',
  pure: true
})
export class ApplyPurePipe implements PipeTransform {

  /**
   * Transforms the input that changes only by <strong>reference</strong> value by applying given <strong>pure</strong>
   * @param value to to be applied
   * @param fn , the function to apply.
   */
  transform(value: any, fn: Function): any {
    return fn(value);
  }

}

@Pipe({
  name: 'apply',
  pure: false
})
export class ApplyPipe implements PipeTransform {

  /**
   * Transforms the input value by applying given function
   * @param value to map
   * @param fn , the function to apply (function should be pure).
   */
  transform(value: any, fn: Function): any {
    return fn(value);
  }

}
