import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(
    public songService: SongService,
    private shareS: ShareService,
    private playlistS: PlaylistService
  ) {}
  loadDone = false;
  namePlaylist = localStorage.getItem('playlistCatName');
  async ngOnInit(): Promise<void> {
    let linkLocalStore = localStorage.getItem('playlistLink');
    this.loadDone = false;
    if (linkLocalStore == null) {
      this.songService.songs = this.songService.songsStore;
      this.loadDone = true;
    } else {
      await this.shareS.timeout(200);
      await this.getData(linkLocalStore);
    }
  }
  ngAfterViewInit(): void {}
  async getData(link) {
    let IdCat = localStorage.getItem('playlistCatID');
    let nameCat = localStorage.getItem('playlistCatName');
    await this.playlistS.loadPlayListForPage(link, IdCat, nameCat);
    this.loadDone = true;
  }
}
