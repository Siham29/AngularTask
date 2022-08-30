import { Router, Routes, ActivatedRoute } from '@angular/router';
import { ServicesService } from './../../services.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "../../app.component";
import { UserConrollerService, UserViewModel } from 'src/app/typescript-angular-client-generated';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  public NewUser:UserViewModel={firstName:'',lastName:'',id:0,};
  public UserList: UserViewModel[]=[];
  id: number = 0;
 

  constructor(public servicesService:ServicesService ,public router:Router,public activatedRoute: ActivatedRoute,public userConrollerService:UserConrollerService) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    console.log('Iam in onInit'+this.id);
    if (this.id > 0) {
      this.userConrollerService.apiUserConrollerIdGet(this.id).subscribe((_user:UserViewModel ) =>{this.NewUser=_user});
    }
   
  }
  
      addUser(form:NgForm){
        
        if(!form.form.valid){
          form.form.markAllAsTouched();
        }
        if(form.form.valid)
       { if(this.id>0){
        this.userConrollerService.apiUserConrollerPut({...this.NewUser}).subscribe(
          (response) => {
            this.router.navigate(['/Users/List']);}
        );
       
  
      }else
        
       { 
        
        this.userConrollerService
        .apiUserConrollerPost(this.NewUser)
        .subscribe( (response) => {this.UserList.push(this.NewUser);
          this.router.navigate(['/Users/List']);});
       

       

        }
       } 
      }

      
    

      
    
      }





