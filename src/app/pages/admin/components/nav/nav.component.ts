import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(
    private router: Router,
    private routerS: RouterService,
    private shareS: ShareService,
    private playlistS: PlaylistService
  ) {}
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
    if (num == 5) {
      this.loadDataStore();
    }
    this.routerS.setNavPath(num);
  }
  trylater() {
    this.shareS.showSnackbarFail();
  }
  loadDataStore() {
    this.playlistS.savePlaylistLocalStore('', 'recForYou', 'Store');
  }
}
