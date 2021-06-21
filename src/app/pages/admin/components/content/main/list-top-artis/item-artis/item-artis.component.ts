import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-item-artis',
  templateUrl: './item-artis.component.html',
  styleUrls: ['./item-artis.component.scss'],
})
export class ItemArtisComponent implements OnInit {
  constructor(
    public s: ShareService,
    private playlistS: PlaylistService,
    private router: Router
  ) {}

  @Input()
  artis: any;

  ngOnInit(): void {}
  async changePlayList(link, name) {
    name = name + ' Chủ Đề';
    let id = localStorage.getItem('playlistCatID');
    this.playlistS.savePlaylistLocalStore(link, id, name);
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
