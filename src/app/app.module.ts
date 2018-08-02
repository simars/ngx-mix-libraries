import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplyPipeComponent } from './pipe/apply-pipe/apply-pipe.component';
import {NgxMixModule} from '../../projects/ngx-mix/src/lib/ngx-mix.module';
import {AsyncInputComponent} from './metadata/async-input/async-input.component';
import {CommonModule} from '@angular/common';
import { AsyncInputDriverComponent } from './metadata/async-input-driver/async-input-driver.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyPipeComponent,
    AsyncInputComponent,
    AsyncInputDriverComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxMixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
