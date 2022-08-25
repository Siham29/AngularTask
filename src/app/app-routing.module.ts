import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 { path: 'Users',loadChildren:() => import('./main/main.module').then(c => c.MainModule)},
 { path: 'posts',loadChildren:() => import('./posts/posts.module').then(c => c.PostsModule)},
 { path: 'login',loadChildren:() => import('./login/login.module').then(c => c.LoginModule)}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
