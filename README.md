# NgxMixLibraries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
This projects is houses ngx-mix library as a library project and wraps it with some demonstrations in the root project

## NgxMix

[projects/ngx-mix-form](projects/ngx-mix-form)

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

Learn about [pure and impure | Pipes](https://angular.io/guide/pipes)


## NgxMixForm

> __CustomValidators__ Build custom cross-field validators for Reactive Froms, ex where one field is required or not required based on state of another field

[projects/ngx-mix-form](projects/ngx-mix-form)

 
```
  class AppComponent implements OnInit  {
   registerForm: FormGroup;
   constructor( @Inject(FormBuilder) private formBuilder: FormBuilder) {}

   ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            phone: ['', [Validators.pattern('[0-9]*')]],
            email: ['', [ Validators.email]]
        },
        {
          validator: [
            CustomValidators.requiredEither('email', 'phone')
          ]
        }
       );
    }

```
 

## Build, Deploy, Test and Try out

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The wrapper project uses ngx-mix libraries and hosts demonstration of library features

Wrapper projects includes `ngx-mix` library in it's path 

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `npm run build:lib` or `ng build ngx-mix --prod` to builds ngx-mix library bundle for distribution in `dist/` 

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
