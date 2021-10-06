import {Injectable} from '@angular/core';
import {Student} from "../../models/Student";

//@Service trong Spring
@Injectable({
  providedIn: 'root' //phmj vi sử dụng bean
})
export class StudentService {
  students: Student[];

  constructor() {
    this.students = [
      {name: "Nguyen Van A", gender: 0, point: 100},
      {name: "Nguyen Van B", gender: 1, point: 0},
      {name: "VIP", gender: 1, point: 0},
      {name: "Nguyen Van C", gender: 2, point: 80},
      {name: "Nguyen Van D", gender: 1, point: 50},
    ]
  }

  findAll() {
    return this.students;
  }

  createStudent(student: Student) {
    this.students.unshift(student);
  }

  findByName(name: String | null): Student | null {
    //lambda;
    // this.students.find(item => item.name == name)
    for (let student of this.students) {
      if (student.name == name) {
        return student;
      }
    }
    return null;
  }
}
