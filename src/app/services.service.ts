import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { User } from './app.component';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'https://localhost:7284/api/UserConroller';

  constructor(public httpclient:HttpClient) { }

  getUser(){
    return this.httpclient.get<User[]>(this.url);

  }
  PostUser(user:User){
    return this.httpclient.post<User>(this.url,user);

  }
  PutUser(user:User){
    return this.httpclient.put<User>(this.url,user);

  }
}
