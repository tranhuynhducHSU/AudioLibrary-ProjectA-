import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss'],
})
export class PlayListItemComponent implements OnInit {
  constructor(
    public s: ShareService,
    private playlistS: PlaylistService,
    private router: Router
  ) {}

  @Input()
  playListItem: any;

  ngOnInit(): void {}
  async changePlayList(link, name) {
    let id = localStorage.getItem('playlistCatID');
    this.playlistS.savePlaylistLocalStore(link, id, name);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
