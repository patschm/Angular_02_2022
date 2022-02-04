import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
    <!-- <app-productgroup-list></app-productgroup-list> -->
    <!-- <app-product-list></app-product-list> -->
    <!-- <app-invoer></app-invoer>
    <hr/>
    <app-invoer></app-invoer> -->
  `,
  styles: []
})
export class AppComponent {
  title = 'communication';
}
