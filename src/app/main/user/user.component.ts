import { Router, Routes, ActivatedRoute } from '@angular/router';
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


  public NewUser:User={firstName:'',lastName:'',id:0,};
  public UserList: User[]=[];
  id: number = 0;
 

  constructor(public servicesService:ServicesService ,public router:Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    console.log('Iam in onInit'+this.id);
    if (this.id > 0) {
      this.servicesService.getUserId(this.id).subscribe((_user:User ) =>{this.NewUser=_user});
    }
   
  }
  
      addUser(form:NgForm){
        
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        if(form.form.valid)
       { if(this.id>0){
        this.servicesService.PutUser({...this.NewUser}).subscribe(
          (response) => {
            this.router.navigate(['/Users/List']);}
        );
       
  
      }else
        
       { 
        
        this.servicesService
        .PostUser(this.NewUser)
        .subscribe( (response) => {this.UserList.push(this.NewUser);
          this.router.navigate(['/Users/List']);});
       

       

        }
       } 
      }

      
    

      
    
      }





