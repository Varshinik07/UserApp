import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  phonenumber=""
  gender=""
  emailid=""
  address=""
  pincode=""
  bloodgroup=""
  dob=""
  age=""
  parentnumber=""
  password=""
  confirmpassword=""


  readValues=()=>{
    let data={
      "name":this.name,
  "phonenumbe":this.phonenumber,
  "gender":this.gender,
  "emailid":this.emailid,
  "address":this.address,
  "pincode":this.pincode,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob,
  "age":this.age,
  "parentnumber":this.parentnumber,
  "password":this.password,
  "confirmpassword":this.confirmpassword
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
