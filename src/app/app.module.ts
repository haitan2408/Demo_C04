import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    AngularPipesComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule, //Module quản lí lớn nhất
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
