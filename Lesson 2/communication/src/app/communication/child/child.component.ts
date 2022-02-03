import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  template: `
    <h1>Child</h1>
    <input type="text" [(ngModel)]="cdata" (input)="doeiets()" />
    <hr />
    <h1>{{cdata}}</h1>
    <h1>From Parent {{cdata}}</h1>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input("c-data")
  public cdata:string = "";

  @Output()
  public ondata : EventEmitter<string> = new EventEmitter();

  public doeiets()
  {
    this.ondata.emit(this.cdata);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
