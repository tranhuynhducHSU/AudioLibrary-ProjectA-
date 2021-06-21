import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCatSongService } from 'src/app/services/allCat/all-cat-song.service';
import { ArtitsService } from 'src/app/services/Artits/artits.service';
import { PlayerService } from 'src/app/services/player/player.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    public cat: AllCatSongService,
    public s: ShareService,
    public playlistS: PlaylistService,
    private router: Router,
    private artitsS: ArtitsService,
    private songS: SongService,
    private routerS: RouterService,
    public audioS: PlayerService
  ) {}

  loadDone = false;
  listTrend = [];

  async ngOnInit(): Promise<void> {
    await this.playlistS.getSongOfPlayList('trendingNow').then((res) => {
      this.s.shuffleArray(res);
      this.cat.catTrend = res;
      for (let i = 0; i < 5; i++) {
        this.listTrend.push(res[i]);
      }
    });
    if (this.cat.allCat.length == 0) {
      await this.playlistS.getPlaylistsOfCat('recForYou').then((res) => {
        this.s.shuffleArray(res);
        let cat = {
          id: 'recForYou',
          name: 'Recomment for you',
          playlists: res,
        };
        this.cat.allCat.push(cat);
      });
      await this.playlistS
        .getPlaylistsOfCat('moreOfWhatUseLike')
        .then((res) => {
          this.s.shuffleArray(res);
          let cat = {
            id: 'moreOfWhatUseLike',
            name: 'Lựa chọn của Musisity',
            playlists: res,
          };
          this.cat.allCat.push(cat);
        });
      await this.playlistS.getPlaylistsOfCat('hotHitVN').then((res) => {
        let cat = { id: 'hotHitVN', name: 'Hot hit Việt Nam', playlists: res };
        this.cat.allCat.push(cat);
      });
    }

    this.loadDone = true;
  }
  async ngAfterViewInit(): Promise<void> {}

  async loadPlayList(link, idCat, namecat) {
    this.playlistS.savePlaylistLocalStore(link, idCat, namecat);
    this.routerS.setNavPath(4);
  }
  changeSong(song) {
    this.audioS.changeSong(song);
  }
}
