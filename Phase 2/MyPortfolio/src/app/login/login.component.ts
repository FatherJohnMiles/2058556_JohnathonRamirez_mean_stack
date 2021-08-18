import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string = "";
  constructor() { }

  ngOnInit(): void {
  }



 checkUser(loginRef:NgForm){
    let logS = loginRef.value
  
    console.log(logS);
    if(logS.username=="John" && logS.password=="567"){
      this.msg = "Login Success";
    }else{
      this.msg = "Unknown User or Password";
    }
  }

}
