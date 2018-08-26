# NgxMixLibraries


## Use Cases

### Pipes

#### apply & applyPure pipes

> __applyPure__ Pipe Transforms the input that changes only by <strong>reference</strong> value by applying given <strong>pure</strong> function

```
@Component({
  selector: 'app-apply-pipe',
  template: '<span>SUM of {{fib | json}} =  {{fib | applyPure: sum}}</span>'
})
export class ApplyPipeComponent {

 fib = [1, 2, 3, 5, 8, 13];
 constructor() { }
 
  public sum(collection: [number]): number {
    return collection.reduce((first, second) => first + second);
  }

}
```

#####
> __apply__ Pipe Transforms the input value by applying given function


* Click here (https://medium.com/simars/create-generic-angular-pipes-apply-and-applypure-b5dc0464ff0d) to see working example and explanations of differences between apply and applyPure
* Learn about [pure and impure | Pipes](https://angular.io/guide/pipes)

#NgzMixLibraries

## Build, Deploy, Test and Try out

https://github.com/simars/ngx-mix-libraries/blob/master/README.md
