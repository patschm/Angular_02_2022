import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatMap, delay, exhaustMap, interval, map, mergeMap, Observable, of, Subscription, switchMap, tap, timer } from 'rxjs';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-invoer',
  templateUrl: './invoer.component.html',
  styleUrls: ['./invoer.component.css'],
  providers:[]
})
export class InvoerComponent implements OnInit, OnDestroy
 {

  private timer$ = interval(1000).pipe(map(a=>a++));
  public data = "";
  public nummer : number = 0;
  private sub1? : Subscription;

  constructor(public svc: MediatorService) { 
  }
  ngOnDestroy(): void {
    this.sub1?.unsubscribe();
  }

  private call(nr: number) : Observable<string>
  {
    return of("From server: " + nr).pipe(delay(Math.random() * 5000));
  }
  public oninput()
  {
    this.svc.text = this.data;
  }
  ngOnInit(): void {
   // this.sub1 = this.svc.text$.subscribe(dt => this.data = dt);
    this.timer$.pipe(tap(x=>this.nummer = x))
      // .pipe(concatMap(d=>this.call(d)))
      // .pipe(mergeMap(d=>this.call(d)))
      // .pipe(exhaustMap(d=>this.call(d)))
      .pipe(switchMap(d=>this.call(d)))
      .subscribe(dx=>this.data = dx);
  }

}
