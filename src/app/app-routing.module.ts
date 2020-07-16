import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: '',      component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: '',     component: HomeComponent },
  {path: 'logout', component: LoginComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
