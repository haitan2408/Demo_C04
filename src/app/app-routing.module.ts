import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";

const routes: Routes = [
  {path:"student/create", component: StudentCreateComponent},
  {path:"student",component:StudentListComponent},
  {path:"",component:StudentListComponent},
  {path:"student/detail/:name",component: StudentDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Module con.
    RouterModule.forRoot(routes)
    //ForChild và ForRoot khác nhau như thế nào?
  ]
})
export class AppRoutingModule { }
