import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NormalCompComponent } from './normal-comp.component';
import { PushCompComponent } from './push-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalCompComponent,
    PushCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NormalCompComponent, PushCompComponent]
})
export class AppModule { }
