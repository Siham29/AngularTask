import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
interface User {
  name: string;
  age: number;
  password:string;
  email:string;
  userName:string;

}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public NewUser:User={name:'',age:0,password:'',email:'',userName:''};
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
