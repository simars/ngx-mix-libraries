import { NgModule } from '@angular/core';
import {ApplyPipe, ApplyPurePipe} from './pipe/apply';
export * from './metadata/async-input';

@NgModule({
  imports: [
  ],
  declarations: [ApplyPipe, ApplyPurePipe],
  exports: [ApplyPipe, ApplyPurePipe]
})
export class NgxMixModule { }
