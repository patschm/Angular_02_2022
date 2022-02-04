import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Product, ProductGroup } from 'src/app/entities/entities';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productGroup : ProductGroup = {id:1, name:"Productgroup 1"};
  public products$? : Observable<Product[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.products$ = this.http.get<Product[]>("https://localhost:5001/products/all/" + this.productGroup.id)
    this.products$ = this.route.params
      .pipe(
        map((bag:any)=>+bag.id),
        switchMap(pgid=>this.http.get<ProductGroup>("https://localhost:5001/productgroups/"+pgid)),
        tap(pg=>this.productGroup = pg), 
        switchMap((pg:ProductGroup)=>this.http.get<Product[]>("https://localhost:5001/products/all/" + pg.id))
      );
      // .pipe(map((bag:any)=>+bag.id))
      // .pipe(switchMap(pgid=>this.http.get<ProductGroup>("https://localhost:5001/productgroups/"+pgid)))
      // .pipe(
      //   tap(pg=>this.productGroup = pg), 
      //   switchMap((pg:ProductGroup)=>this.http.get<Product[]>("https://localhost:5001/products/all/" + pg.id))
      //   );
  }

}
