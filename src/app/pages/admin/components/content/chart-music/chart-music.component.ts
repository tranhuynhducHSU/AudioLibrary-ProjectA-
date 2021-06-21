import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllCatSongService } from 'src/app/services/allCat/all-cat-song.service';
import { ArtitsService } from 'src/app/services/Artits/artits.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-chart-music',
  templateUrl: './chart-music.component.html',
  styleUrls: ['./chart-music.component.scss'],
})
export class ChartMusicComponent implements OnInit, AfterViewInit {
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

  async ngOnInit(): Promise<void> {
    if (this.cat.allTops.length == 0) {
      await this.playlistS
        .getPlaylistsOfCat('TheTopTracksArtistsof2020')
        .then((res) => {
          this.s.shuffleArray(res);
          let cat = {
            id: 'TheTopTracksArtistsof2020',
            name: 'The Top Tracks & Artists of 2020',
            playlists: res,
          };
          this.cat.allTops.push(cat);
        });
      await this.playlistS.getPlaylistsOfCat('Top50').then((res) => {
        this.s.shuffleArray(res);
        let cat = {
          id: 'Top50',
          name: 'Top 50',
          playlists: res,
        };
        this.cat.allTops.push(cat);
      });
      await this.playlistS.getPlaylistsOfCat('BestKPopof2020').then((res) => {
        let cat = {
          id: 'BestKPopof2020',
          name: 'Best K-Pop of 2020',
          playlists: res,
        };
        this.cat.allTops.push(cat);
      });
    }

    //await this.s.timeout(300);
    this.loadDone = true;
  }
  async ngAfterViewInit(): Promise<void> {}

  async loadPlayList(link, idCat, namecat) {
    this.playlistS.savePlaylistLocalStore(link, idCat, namecat);
    this.routerS.setNavPath(4);
  }
}
