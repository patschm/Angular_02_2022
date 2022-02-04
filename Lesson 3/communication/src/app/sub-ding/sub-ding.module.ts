import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoerComponent } from './invoer/invoer.component';
import { FormsModule } from '@angular/forms';
import { MediatorService } from './mediator.service';



@NgModule({
  declarations: [
    InvoerComponent
  ],
  exports:[InvoerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[MediatorService]
})
export class SubDingModule { }
