import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _isRhino:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  isRhino(){
    return this._isRhino.asObservable();
  }

  setRhino(val:boolean){
    this._isRhino.next(val);
  }
}
