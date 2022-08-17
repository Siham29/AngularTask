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

}
