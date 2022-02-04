import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductgroupListComponent } from './productgroup-list/productgroup-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductgroupListComponent
  ],
  exports:[ProductgroupListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductgroupModule { }
