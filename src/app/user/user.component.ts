import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
 @Output()user=new EventEmitter<User>();
 @Input() public NewUser:User={name:'',age:0,password:'',email:'',userName:''};

  constructor() { }

  ngOnInit(): void {
   
  }
  
      addUser(form:NgForm){
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        if(form.form.valid)
        this.user.emit(form.form.value);
      }




}
