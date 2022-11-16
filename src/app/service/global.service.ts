import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _isRhino:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private _elephantGraph:any;

  constructor(private http:HttpClient) { }

  isRhino(){
    return this._isRhino.asObservable();
  }

  setRhino(val:boolean){
    this._isRhino.next(val);
  }

  getElephantGraph(){
    return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/elephants/graphs.json');
  }
  
  getRhinoGraph(){
    return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/rhinos/graphs.json');
  }



}
