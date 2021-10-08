import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, // Module con.
    RouterModule.forRoot(routes)
    //ForChild và ForRoot khác nhau như thế nào?
  ]
})
export class AppRoutingModule { }
