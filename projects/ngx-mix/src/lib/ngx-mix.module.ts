import { NgModule } from '@angular/core';
import {MapPipe, MapPurePipe} from './pipe/map.pipe';

@NgModule({
  imports: [
  ],
  declarations: [MapPipe, MapPurePipe],
  exports: [MapPipe, MapPurePipe]
})
export class NgxMixModule { }
