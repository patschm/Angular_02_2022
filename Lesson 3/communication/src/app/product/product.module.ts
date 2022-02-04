import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductgroupListComponent } from '../productgroup/productgroup-list/productgroup-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes  = [
  {
    path:":id",
    component:ProductListComponent
  }
  // },
  // {
  //   path:"**",
  //   component: NotFoundComponent
  // }
]


@NgModule({
  declarations: [
    ProductListComponent
  ],
  exports:[ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
