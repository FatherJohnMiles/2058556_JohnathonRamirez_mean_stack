import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tQuestion } from './questions.model';



@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http:HttpClient) { 




  }
    display():string{
      return "Fun Trivia Quiz";
    }

  // loadtestQ() : void {
  //   this.http.get("assets/q&a.json").
  //   subscribe(data=>console.log(data),
  //   error=>console.log(error),
  //   ()=>console.log("sucessful"));
  // }

  loadtestQ() : Observable<tQuestion[]> {
    return this.http.get<tQuestion[]>("assets/q&a.json")
    
  }

}
