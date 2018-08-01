import { NgModule } from '@angular/core';
import {ApplyPipe, ApplyPurePipe} from './pipe/apply';

@NgModule({
  imports: [
  ],
  declarations: [ApplyPipe, ApplyPurePipe],
  exports: [ApplyPipe, ApplyPurePipe]
})
export class NgxMixModule { }
