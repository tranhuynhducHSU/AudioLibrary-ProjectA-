import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCatSongService } from 'src/app/services/allCat/all-cat-song.service';
import { ArtitsService } from 'src/app/services/Artits/artits.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit, AfterViewInit {
  constructor(
    public cat: AllCatSongService,
    public s: ShareService,
    public playlistS: PlaylistService,
    private router: Router,
    private artitsS: ArtitsService,
    private songS: SongService,
    private routerS: RouterService
  ) {}

  loadDone = false;
  listPlaylist = [];

  async ngOnInit(): Promise<void> {
    await this.playlistS.getPlaylists(0).then((res) => {
      if (res != null) {
        this.s.shuffleArray(res);
        for (let i = 0; i < 10; i++) {
          this.listPlaylist.push(res[i]);
        }
      }
    });
    await this.playlistS.getPlaylists(10).then((res) => {
      if (res != null) {
        this.s.shuffleArray(res);
        for (let i = 0; i < 10; i++) {
          this.listPlaylist.push(res[i]);
        }
      }
    });
    await this.playlistS.getPlaylists(20).then((res) => {
      if (res != null) {
        this.s.shuffleArray(res);
        for (let i = 0; i < 10; i++) {
          this.listPlaylist.push(res[i]);
        }
      }
    });
    this.loadDone = true;
  }
  async ngAfterViewInit(): Promise<void> {}
  async loadPlayList(link, idCat, namecat) {
    this.playlistS.savePlaylistLocalStore(link, idCat, namecat);
    this.routerS.setNavPath(4);
  }
}
