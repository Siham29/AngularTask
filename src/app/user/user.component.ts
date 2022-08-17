import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface User {
  name: string;
  age: number;
  password:string;
  email:string;
  userName:string;

}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ Input () public NewUser:User={name:'',age:0,password:'',email:'',userName:''};
  @ Input () public UserList:User[]=[
    {
      name:'Siham', age:22, password:'12345',email:'siham.m@gmail.com ',userName:'Siham29'
  
    },
  
    {
      name:'Israa', age:22, password:'12345',email:'Israa.m@gmail.com ',userName:'Israa55'
  
    },
    {
      name:'Aya', age:22, password:'12345',email:'Aya.m@gmail.com ',userName:'Ayaa'
  
    }
  
      
    ];

  constructor() { }

  ngOnInit(): void {
   
  }


  DeleteUser(user:User){
let i =this.UserList.indexOf(user);
if(i>=0){
  this.UserList.splice(i,1);
}

  }
  addUser(form:NgForm){
    if(!form.form.valid){
      form.form.markAllAsTouched();
    }
    if(form.form.valid)
    this.UserList.push({...this.NewUser});
  }


}
