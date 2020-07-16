import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentListComponent } from './student-list/student-list.component';  
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: '',      component: LoginComponent},
  {path: 'home', component: HomeComponent},
  
  { path: 'view-student', component: StudentListComponent },  
  { path: 'add-student', component: AddStudentComponent },

  {path: 'logout', component: LoginComponent},

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
