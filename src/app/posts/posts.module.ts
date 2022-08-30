import { PostService } from './../typescript-angular-client-generated/api/post.service';
import { PostsComponent } from './posts/posts.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,FormsModule,
  ], providers: [ PostService]
})
export class PostsModule { }
