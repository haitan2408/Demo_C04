import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './module/student/student-detail/student-detail.component';
import { StudentCreateComponent } from './module/student/student-create/student-create.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { StudentListComponent } from './module/student/student-list/student-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ShareModule} from "./module/share/share.module";
import {StudentModule} from "./module/student/student.module";
import {StudentService} from "./service/student.service";


@NgModule({
  declarations: [
    AppComponent,
    AngularPipesComponent,
  ],
  imports: [
    BrowserModule, //Module quản lí lớn nhất
    ShareModule,
    AppRoutingModule,
    StudentModule
  ],
  exports: [],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
