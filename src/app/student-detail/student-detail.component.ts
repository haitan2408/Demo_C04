import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../models/Student";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  studentDetail: Student | null | undefined;

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const name = paramMap.get("name"); //name phải trùng với từ khóa khai báo bên app-routing
      console.log(name);
      this.studentDetail = studentService.findByName(name);
    })
  }

  ngOnInit(): void {
  }

}
