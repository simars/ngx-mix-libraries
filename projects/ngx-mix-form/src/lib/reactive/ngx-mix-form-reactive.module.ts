import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {DisableControlDirective} from './control/disable-control.directive';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [DisableControlDirective],
  exports: [ReactiveFormsModule, DisableControlDirective]
})
export class NgxMixFormReactiveModule {

}
