import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class MediatorService {

  private _text: BehaviorSubject<string> = new BehaviorSubject("default");//"default";

  public get text$()
  {
    return this._text;
  }
  public set text(value:string)
  {
    this._text.next(value);
  }


  constructor() { }
}
