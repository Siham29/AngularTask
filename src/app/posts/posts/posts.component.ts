import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post, PostService } from 'src/app/typescript-angular-client-generated';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public PostsList: Post[]=[];
  public post:Post={title:'',userId:0};
  constructor(public postConrollerService:PostService,public router:Router) { }



  ngOnInit(): void {
    this.postConrollerService.apiPostGet().subscribe(
      (response) => { this.PostsList = response; });
  }
  addPost(title:string | undefined){
    this.post.title=title;
    this.post.userId= JSON.parse(localStorage.getItem('ID')|| '{}');
    this.postConrollerService
        .apiPostPost(this.post)
        .subscribe( (response) => {this.PostsList.push(this.post);
         });
    
  }
 
}
