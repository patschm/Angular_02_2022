import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [AboutComponent],
  exports: [AboutComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
