import { AbstractControl} from '@angular/forms';

/**
 * Build custom cross-field validators for Reactive Froms
 * @link https://codepen.io/simars/pen/ZMYxrm
 * @see https://medium.com/simars/custom-transitive-validators-in-reactive-forms-anguar-4201d4b8e3f6
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
 */
export class CustomValidators {

  static required(requiredControlName: string) {

    const whenExists = (controlToCheckName: string) => {
      return CustomValidators.requiredWhen(requiredControlName, controlToCheckName);
    };
    const  whenMissing = (controlToCheckName: string) => {
      return CustomValidators.requiredWhenNot(requiredControlName, controlToCheckName);
    };
    const or = (controlToCheckName: string) => {
      return CustomValidators.requiredEither(requiredControlName, controlToCheckName);
    };
    return {whenExists, whenMissing, or};
  }

  static requiredWhen(requiredControlName, controlToCheckName) {
    const validator = (control: AbstractControl) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || !toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      return {[errorValue]: true};
    };
    return validator;
  }

  static requiredEither(requiredControlName, controlToCheckName) {
    const validator = (control) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        removeErrors(['required'], toCheck);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_Either_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      setErrors({required: errorValue}, toCheck);
      return {[errorValue]: true};
    };
    return validator;
  }


  static requiredWhenNot(requiredControlName, controlToCheckName) {
    const validator = (control) => {
      const required = control.get(requiredControlName);
      const toCheck = control.get(controlToCheckName);
      if (required.value || toCheck.value) {
        removeErrors(['required'], required);
        return null;
      }
      const errorValue = `${requiredControlName}_Required_When_Not_${controlToCheckName}`;
      setErrors({required: errorValue}, required);
      return  {[errorValue]: true};
    };
    return validator;
  }

}

function setErrors(error: {[key: string]: any }, control: AbstractControl) {
  control.setErrors({...control.errors, ...error});
}

function  removeErrors(keys: string[], control: AbstractControl) {
  const remainingErrors = keys.reduce((errors, key) => {
    delete  errors[key];
    return errors;
  }, {...control.errors});
  control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
}
