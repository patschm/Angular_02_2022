import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReviewsModule } from './reviews/reviews.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
