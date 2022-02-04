import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubDingModule } from './sub-ding/sub-ding.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubDingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
