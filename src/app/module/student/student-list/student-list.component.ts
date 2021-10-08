import { Component, OnInit } from '@angular/core';
import {Student} from "../../../../models/Student";
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";
import {pipe} from "rxjs";
import {StudentDetailComponent} from "../student-detail/student-detail.component";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[]|any;
  studentParent: Student | undefined;

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.findAll().subscribe(next=> {
       this.students = next;
      console.log(this.students)
    }, error => {

    }, () => {

    });
    console.log(this.students)

    // this.studentService.findAll().toPromise().then(data => {
    //   this.students = data;
    // })
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
