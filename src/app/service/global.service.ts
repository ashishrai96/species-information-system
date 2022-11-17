import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private _isRhino:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private _loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _elephantGraph:any;

  constructor(private http:HttpClient) { }

  isRhino(){
    return this._isRhino.asObservable();
  }

  setRhino(val:boolean){
    this._isRhino.next(val);
  }

  getLoading(){
    return this._loading.asObservable();
  }

  setLoading(val:boolean){
    this._loading.next(val);
  }

  getElephantGraph(){
    return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/elephants/graphs.json');
  }
  
  getRhinoGraph(){
    return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/rhinos/graphs.json');
  }

  getIllegalTrading(isRhino){
    if(isRhino){
      // return this.http.get('http://localhost:4200/assets/jsons/rhino_trading.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/rhinos/trading.json');
    }
    else{
      // return this.http.get('http://localhost:4200/assets/jsons/elephant_trading.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/elephants/trading.json');
    }
  }
  
  getTrophyHunting(isRhino){
    if(isRhino){
      // return this.http.get('http://localhost:4200/assets/jsons/rhino_hunting.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/rhinos/hunting.json');
    }
    else{
      // return this.http.get('http://localhost:4200/assets/jsons/elephant_hunting.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/elephants/hunting.json');
    }
  }
  
  getPoaching(isRhino){
    if(isRhino){
      // return this.http.get('http://localhost:4200/assets/jsons/rhino_poaching.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/rhinos/poaching.json');
    }
    else{
      // return this.http.get('http://localhost:4200/assets/jsons/elephant_poaching.json');
      return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/elephants/poaching.json');
    }
  }

  getPosts(){
    return this.http.get('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json');
  }
  
  setPosts(message){
    return this.http.post('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', message);
  }

  updateScore(post: any, score: number) {
	  return this.http.patch('https://est-sis-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + post.id + '.json', {score: score});
  }

}
