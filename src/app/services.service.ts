import { Injectable } from '@angular/core';
interface User {
  name: string;
  age: number;
  password:string;
  email:string;
  userName:string;

}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public UserList:User[]=[
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
}
