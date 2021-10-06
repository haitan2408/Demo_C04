import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Student} from "../../models/Student";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student | undefined;
  studentForm: FormGroup;

  constructor(private studentService: StudentService, private router: Router) {
    this.studentForm = new FormGroup({
      name: new FormControl("hai",[Validators.required,Validators.minLength(4)]),
      gender: new FormControl("0",[Validators.required]),
      point: new FormControl("",[Validators.required, this.validatePoint])
    })
  }

  validatePoint(point: AbstractControl) {
    let value = point.value;
    if(value<0 || value >10) {
      return {"invalid" : true}
    } else {
      return null;
    }
  }

  ngOnInit(): void {
  }

  createStudent(name: string, gender: string, point: string) {
    //gán giá trị cho object student
    this.student = {name: name, gender: parseInt(gender), point: parseInt(point)};
    console.log(this.student);
  }

  createStudentTemplateDrivenForm(registerForm: NgForm) {
    if(registerForm.value.name =="") {
      alert("name không được để trống")
    }
    console.log(registerForm)
  }

  createStudentReactiveForms() {
    console.log(this.studentForm);
    //valid : true nếu validate đúng. flase nếu validate còn có lỗi
    //invalid: true nếu validate còn có lỗi. false nếu validate đúng
    if(this.studentForm.valid) {
     this.studentService.createStudent(this.studentForm.value);
     this.router.navigateByUrl("/student")
    }

  }
}
