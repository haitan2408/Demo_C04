import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {StudentComponent} from "./student.component";

const routes: Routes = [
  // {path:"student/create", component: StudentCreateComponent},
  // {path:"student",component:StudentListComponent},
  {path:"",component:StudentListComponent},
  // {path:"student/detail/:name",component: StudentDetailComponent}
  {
    path: "student", component: StudentComponent, children: [
      {path:"",component:StudentListComponent},
      {path: "create", component: StudentCreateComponent},
      {path: "detail/:name", component: StudentDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentRoutingModule { }
