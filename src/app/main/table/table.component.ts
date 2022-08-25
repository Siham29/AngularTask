import { User } from './../../app.component';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalcAgePipe } from 'src/app/calc-age.pipe';
import { ServicesService } from 'src/app/services.service';
import { UserConrollerService, UserViewModel } from 'src/app/typescript-angular-client-generated';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public NewUser: User = { firstName: '', lastName: '', id: 0 };



  public UserList: UserViewModel[] = [];





  constructor(public servicesService: ServicesService, public calcAgePipe: CalcAgePipe, public activatedRoute: ActivatedRoute, public router: Router,public userConrollerService:UserConrollerService) { }

  ngOnInit(): void {
   
    this.userConrollerService.apiUserConrollerGet().subscribe(
      (response) => { this.UserList = response; });
  }

  DeleteUser(user: User) {
    let i = this.UserList.indexOf(user);
    if (i >= 0) {
      this.UserList.splice(i, 1);
      this.servicesService.DeleteUser(user.id).subscribe();
    }

  }
  addUser(user: User) {
  
       this.UserList.push(user);
    
    
  }
  EditUser(user: User) {
    
    this.router.navigate(['/main/' + user.id]);


  }
}
