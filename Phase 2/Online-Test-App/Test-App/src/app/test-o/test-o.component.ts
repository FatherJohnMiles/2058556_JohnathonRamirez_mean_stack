import { QuestionsService } from './../questions.service';
import { Component, OnInit } from '@angular/core';
import { tQuestion } from '../questions.model';

@Component({
  selector: 'app-test-o',
  templateUrl: './test-o.component.html',
  styleUrls: ['./test-o.component.css']
})
export class TestOComponent implements OnInit {
  tData: Array<tQuestion>=[]
  constructor(
    public quest:QuestionsService,
    ) { }

  ngOnInit(): void {
  }

  loadTest() {

    this.quest.loadtestQ(). subscribe(data=>this.tData=data,
      error=>console.log(error), ()=>console.log("success"));

  }

  // onSubmit() {

  //   if();



  // }
}
