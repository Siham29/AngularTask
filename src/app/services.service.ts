import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { User } from './app.component';
import { Post } from './typescript-angular-client-generated';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = 'https://localhost:7284/api/UserConroller';
  private url1 = 'https://localhost:7284/api/Post';

  constructor(public httpclient:HttpClient) { }

  getUser(){
    return this.httpclient.get<User[]>(this.url);

  }
  getUserId(id:number){
    return this.httpclient.get<User>(`https://localhost:7284/api/UserConroller/${id}`);

  }
  PostUser(user:User){
    return this.httpclient.post<User>(this.url,user);

  }
  PutUser(user:User){
    return this.httpclient.put<User>(this.url,user);

  }
  DeleteUser(id:number){
    return this.httpclient.delete<User>(`https://localhost:7284/api/UserConroller/${id}`)
  }
  Postposts(post:Post){
    return this.httpclient.post<User>(this.url1,post);

  }
}
