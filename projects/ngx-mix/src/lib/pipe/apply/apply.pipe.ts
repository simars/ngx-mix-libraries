import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'applyPure',
  pure: false
})
export class ApplyPurePipe implements PipeTransform {

  /**
   * Transforms the input value with a given function
   * @param value to map
   * @param fn , the mapping function
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
   * Transforms the input value with a given <strong>pure</strong> function
   * @param value to map
   * @param fn , the mapping function (function should be pure)
   */
  transform(value: any, fn: Function): any {
    return fn(value);
  }

}
