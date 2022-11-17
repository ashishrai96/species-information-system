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

  getIllegalTrading(isRhino){
    if(isRhino){
      return this.http.get('http://localhost:4200/assets/jsons/rhino_trading.json');
    }
    else{
      return this.http.get('http://localhost:4200/assets/jsons/elephant_trading.json');
    }
  }
  
  getTrophyHunting(isRhino){
    if(isRhino){
      return this.http.get('http://localhost:4200/assets/jsons/rhino_hunting.json');
    }
    else{
      return this.http.get('http://localhost:4200/assets/jsons/elephant_hunting.json');
    }
  }
  
  getPoaching(isRhino){
    if(isRhino){
      return this.http.get('http://localhost:4200/assets/jsons/rhino_poaching.json');
    }
    else{
      return this.http.get('http://localhost:4200/assets/jsons/elephant_poaching.json');
    }
  }
}
