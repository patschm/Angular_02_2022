import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductgroupModule } from './productgroup/productgroup.module';
import { SubDingModule } from './sub-ding/sub-ding.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ProductModule } from './product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductgroupListComponent } from './productgroup/productgroup-list/productgroup-list.component';
import { TestGuard } from './test.guard';
//import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path:"productgroups", 
    component:ProductgroupListComponent,
    canActivate:[TestGuard]
  },
  {
    path:"products",
    loadChildren: ()=>import("src/app/product/product.module").then(m=>m.ProductModule)
  },
  // {
  //   path:"products/:id",
  //   component: ProductListComponent
  // },
  // {
  //   path:"products", children:[
  //     {
  //       path:":id",
  //       component:
  //     }
  //   ]
  // },
  {
    path:"",
    redirectTo:"/productgroups",
    pathMatch:"full"
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubDingModule,
    ProductgroupModule,
    //ProductModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
