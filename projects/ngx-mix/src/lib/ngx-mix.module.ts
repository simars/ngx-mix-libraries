import { NgModule } from '@angular/core';
import {ApplyPipe, ApplyPurePipe} from './pipe/apply/apply.pipe';
export * from './metadata/async-input/async-input';

@NgModule({
  imports: [
  ],
  declarations: [ApplyPipe, ApplyPurePipe],
  exports: [ApplyPipe, ApplyPurePipe]
})
export class NgxMixModule { }
