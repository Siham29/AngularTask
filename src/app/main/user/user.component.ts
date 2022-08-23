import { Router, Routes } from '@angular/router';
import { ServicesService } from './../../services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "../../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public NewUser:User={firstName:'',lastName:'',id:0};
  public UserList: User[]=[];
 

  constructor(public servicesService:ServicesService ,public router:Router) { }

  ngOnInit(): void {
    
   
  }
  
      addUser(form:NgForm){
        
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        if(form.form.valid)
       {this.servicesService
        .PostUser(this.NewUser)
        .subscribe(user => this.UserList.push(user));
       

        this.router.navigate(['/main/List']);
       } 
      }

      
    

      
    
      }





