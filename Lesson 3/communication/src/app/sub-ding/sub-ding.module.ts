import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoerComponent } from './invoer/invoer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InvoerComponent
  ],
  exports:[InvoerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SubDingModule { }
