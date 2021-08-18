import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // fname:string = "";
  // lname:string = "";
  // user:string = "";
  // pass:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  signupUser(signupRef:NgForm){
    let signupS = signupRef.value
  
    console.log(signupS);
  }

}

