import {Component, Injectable} from '@angular/core';
import {Student} from "../../models/Student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

//@Service trong Spring
@Injectable()
export class StudentService {
  private api_url_student = "http://localhost:3000/students";

  constructor(private httpClient: HttpClient) {
  }

  findAll() :Observable<Student[]|any> {
    return this.httpClient.get(this.api_url_student);
}

  createStudent(student: Student):Observable<any> {
    return this.httpClient.post(this.api_url_student, student);
  }

  findByName(name: String | null): Observable<Student|any> {
    //lambda;
   return this.httpClient.get(this.api_url_student +"?name="+name);
  }
}
