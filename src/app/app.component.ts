import { Component } from '@angular/core';
export interface User {
  firstName: string;
  // age: number;
  lastName:string;
  id:number;
  // userName:string;
  // DateOfBirth?:Date;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
   
  
}
