import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  username=""
  password=""

  readValues=()=>{
let data={
  "username":this.username,
  "password":this.password
}
console.log(data)
  }

  ngOnInit(): void {
  }

}
