import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: RouterService) {
    this.liAct = this.router.path;
    console.log(this.liAct);
  }
  liAct;
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
