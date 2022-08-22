import { Injectable } from '@angular/core';
interface User {
  name: string;
  age: number;
  password:string;
  email:string;
  userName:string;
  DateOfBirth?:Date;

}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public UserList:User[]=[
    {
      name:'Siham', age:22, password:'12345',email:'siham.m@gmail.com ',userName:'Siham29',DateOfBirth:new Date('Sep 2, 2000')
  
    },
  
    {
      name:'Osaid', age:22, password:'12345',email:'Osaid.m@gmail.com ',userName:'Osaid5',DateOfBirth:new Date('Nov 15, 2009')
  
    },
    {
      name:'Rahaf', age:22, password:'12345',email:'Rahaf.m@gmail.com ',userName:'Rahaf22',DateOfBirth:new Date('Nov 10, 2001')
  
    }
  
      
    ];

  constructor() { }
}
