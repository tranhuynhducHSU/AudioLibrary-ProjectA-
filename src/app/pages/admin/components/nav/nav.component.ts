import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  liAct = 6;

  ngOnInit(): void {}

  clicked(event) {
    event.target.classList.add('act'); // To ADD
  }
  setActLi(num) {
    if (num != this.liAct) {
      return false;
    }
    return true;
  }
  click(num) {
    this.liAct = num;
  }
}
