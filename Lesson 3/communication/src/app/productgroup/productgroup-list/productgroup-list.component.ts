import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductGroup } from 'src/app/entities/entities';

@Component({
  selector: 'app-productgroup-list',
  templateUrl: './productgroup-list.component.html',
  styleUrls: ['./productgroup-list.component.css']
})
export class ProductgroupListComponent implements OnInit {

  public productGroups$?:  Observable<ProductGroup[]>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.productGroups$ = this.http.get<ProductGroup[]>("https://localhost:5001/productgroups");
  }

}
