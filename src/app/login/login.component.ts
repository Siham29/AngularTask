import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(public authenticateService:AuthenticateService,public userConrollerService:UserConrollerService) { }

  ngOnInit(): void {
    
  }
login(form:NgForm){
  if(form.form.valid){
    this.NewUser.username=form.value.username;
    this.NewUser.password=form.value.password;
    this.authenticateService.apiAuthenticateLoginPost(this.NewUser).subscribe();
    this.userConrollerService.apiUserConrollerGet().subscribe(
      (response) => { this.UserList = response; });
    
    
  }
}
}
