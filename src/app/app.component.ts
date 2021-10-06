import {Component, OnInit} from '@angular/core';
import {Student} from "../models/Student";
import {StudentService} from "./service/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularComponent';


  ngOnInit(): void {

  }
}
