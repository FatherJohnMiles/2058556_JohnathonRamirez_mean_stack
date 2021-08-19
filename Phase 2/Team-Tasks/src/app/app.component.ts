import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team-Tasks';

  nTask:string="";
  taskInfo : Array<any>=[]
  // addingtask: Array<any> =[];

  newTask(taskRef:NgForm) {
    this.nTask = taskRef.value;
    this.taskInfo.push(this.nTask);
    console.log(taskRef.value);
  }

}





