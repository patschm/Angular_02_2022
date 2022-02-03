import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReviewDetailComponent
  ],
  exports:[ReviewDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReviewsModule { }
