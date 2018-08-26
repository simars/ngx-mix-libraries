# NgxMixForm


#####
> __CustomValidators__ Build custom cross-field validators for Reactive Froms, ex where one field is required or not required based on state of another field

 * Build custom cross-field validators for Reactive Froms
 * Learn more on [Medium](https://medium.com/simars/custom-transitive-validators-in-reactive-forms-anguar-4201d4b8e3f6)
 * See a working example by clicking on [CodePen](https://codepen.io/simars/pen/ZMYxrm)
 
 
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

 * ```


#NgxMixLibraries

## Build, Deploy, Test and Try out

https://github.com/simars/ngx-mix-libraries/blob/master/README.md
