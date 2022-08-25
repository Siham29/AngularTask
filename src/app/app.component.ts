import { Component } from '@angular/core';
export interface User {
  firstName: string;
  age?: number;
  lastName:string;
  email?:string;
  id:number;
  DateOfBirth?:Date;
  password?:string;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
   
  
}
