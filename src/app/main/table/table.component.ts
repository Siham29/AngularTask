import { Component, OnInit, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { CalcAgePipe } from 'src/app/calc-age.pipe';
import { ServicesService } from 'src/app/services.service';
import {User} from "../../app.component";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public NewUser:User={firstName:'',lastName:'',id:0};
  

  public UserList: User[]=[];

  constructor(public servicesService:ServicesService, public calcAgePipe:CalcAgePipe ) { }

  ngOnInit(): void {
    this.servicesService.getUser().subscribe(
      (response) => { this.UserList = response; });
  }

  DeleteUser(user:User){
  let i =this.UserList.indexOf(user);
  if(i>=0){
    this.UserList.splice(i,1);
  }
  
    }
    addUser(user: User){
      
    this.UserList.push(user);
  }
  

}
