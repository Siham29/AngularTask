import { Component, OnInit, PipeTransform } from '@angular/core';
import { CalcAgePipe } from 'src/app/calc-age.pipe';
import { ServicesService } from 'src/app/services.service';

interface User {
  name: string;
  age: number;
  password:string;
  email:string;
  userName:string;
  DateOfBirth?:Date;

}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public NewUser:User={name:'',age:0,password:'',email:'',userName:''};
  public updateUser:User={name:'',age:0,password:'',email:'',userName:''};
  

 

  constructor(public servicesService:ServicesService, public calcAgePipe:CalcAgePipe ) { }

  ngOnInit(): void {
  }

  DeleteUser(user:User){
  let i =this.servicesService.UserList.indexOf(user);
  if(i>=0){
    this.servicesService.UserList.splice(i,1);
  }
  
    }
    addUser(user: User){
      
    this.servicesService.UserList.push(user);
  }

}
