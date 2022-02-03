import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MijnModule } from './MijnModule/mijn.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MijnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
