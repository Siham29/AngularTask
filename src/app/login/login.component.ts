import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService, LoginModel, UserConrollerService, UserViewModel } from '../typescript-angular-client-generated';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public NewUser:LoginModel={username:'',password:''};
  public UserList: UserViewModel[] = [];

  constructor(public authenticateService:AuthenticateService,public userConrollerService:UserConrollerService,public router:Router) { }

  ngOnInit(): void {
    
  }
login(form:NgForm){
  if(form.form.valid){
    this.NewUser.username=form.value.username;
    this.NewUser.password=form.value.password;
    this.authenticateService.apiAuthenticateLoginPost(this.NewUser).subscribe((res)=>
        {
        localStorage.setItem('token', res.token );
        localStorage.setItem('ID', res.id.value);
        console.log(res.id.value)
        
      } );
      this.router.navigate(['/Users/']);
    
    
  }
}
}
