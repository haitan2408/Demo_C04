import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  dataInput: string = "Ha Noi mua thu";
  inputNumber: number = 1.12345
  money: number = 5;
  today:Date = new Date();

}
