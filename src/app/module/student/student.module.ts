import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {ShareModule} from "../share/share.module";
import {StudentRoutingModule} from "./student-routing.module";
import { StudentComponent } from './student.component';



@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentCreateComponent,
    StudentListComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    StudentRoutingModule
  ],
  exports: [
    StudentDetailComponent,
    StudentCreateComponent,
    StudentListComponent
  ],
  providers:[]
})
export class StudentModule { }
