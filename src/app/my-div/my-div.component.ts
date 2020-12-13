import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css']
})
export class MyDivComponent implements OnInit {
  items: number[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 40; i++) {
      this.items.push(i);
    }
  }
}
