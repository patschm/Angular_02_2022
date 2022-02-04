import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-invoer></app-invoer>
    <hr/>
    <app-invoer></app-invoer>
  `,
  styles: []
})
export class AppComponent {
  title = 'communication';
}
