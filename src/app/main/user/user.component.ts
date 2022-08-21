import { Router, Routes } from '@angular/router';
import { ServicesService } from './../../services.service';
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


  public NewUser:User={name:'',age:0,password:'',email:'',userName:''};
 

  constructor(public servicesService:ServicesService ,public router:Router) { }

  ngOnInit(): void {
   
  }
  
      addUser(form:NgForm){
        
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        if(form.form.valid)
       {this.servicesService.UserList.push(form.value);

        this.router.navigate(['/main/List']);
       } 
      }

      
    

      
    
      }





