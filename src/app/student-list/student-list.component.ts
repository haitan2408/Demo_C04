import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/Student";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  studentParent: Student | undefined;

  constructor(private studentService: StudentService, private router: Router) {
    this.students = this.studentService.findAll();
  }


  showDetail(item:Student) {
    this.studentParent = item; // gán.
  }

  // getNewStudent(value: Student) {
  //   this.studentService.createStudent(value);
  // }

  ngOnInit(): void {
  }

  movePageCreateStudent() {
    this.router.navigateByUrl("/student/create")
  }
}
