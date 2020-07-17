import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router";


import { StudentService } from '../../student.service';

import { Student } from '../../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  student : Student=new Student();

  constructor(private router: Router) { }

  ngOnInit() {

    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['home']);
      return;
    }
  }
  addStudent(): void {
    this.router.navigate(['add-student']);
  };

  studentList(): void {
    this.router.navigate(['student-list']);
  };
}



