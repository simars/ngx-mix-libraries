import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplyPipeComponent } from './pipe/apply-pipe/apply-pipe.component';
import {NgxMixModule} from '../../projects/ngx-mix/src/lib/ngx-mix.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplyPipeComponent
  ],
  imports: [
    BrowserModule,
    NgxMixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
