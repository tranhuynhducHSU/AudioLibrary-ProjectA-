import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router, private routerS: RouterService) {}
  //liAct = this.routerS.navPath;
  ngOnInit(): void {
    console.log(this.routerS.navPath);
  }

  clicked(event) {
    event.target.classList.add('act'); // To ADD
  }
  setActLi(num) {
    if (num != this.routerS.navPath) {
      return false;
    }
    return true;
  }
  click(num) {
    this.routerS.setNavPath(num);
  }
}
