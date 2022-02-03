import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from 'src/app/entities/entities';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  public group: FormGroup;

  public submit()
  {
   
    console.log(this.group.value);
    let review: Review = new Review();
    Object.assign(review, this.group.value);
    console.log(review);
  }

  constructor(private bld: FormBuilder) { 
    this.group = this.bld.group({
      "author": ["", [Validators.required]],
      "text": ["", [Validators.required]],
      "score": [0, [Validators.min(0), Validators.max(5)]]
    });
  }

  ngOnInit(): void {
  }

}
