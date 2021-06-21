import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllCatSongService } from 'src/app/services/allCat/all-cat-song.service';
import { ArtitsService } from 'src/app/services/Artits/artits.service';
import { PlaylistService } from 'src/app/services/playlist/playlist.service';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-list-for-list-song',
  templateUrl: './list-for-list-song.component.html',
  styleUrls: ['./list-for-list-song.component.scss'],
})
export class ListForListSongComponent implements OnInit, AfterViewInit {
  constructor(
    public cat: AllCatSongService,
    public s: ShareService,
    public artitsS: ArtitsService,
    private playlistS: PlaylistService,
    private routerS: RouterService
  ) {}
  loadDone = false;
  listArtits;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.s.isLoadDone = false;
    this.artitsS.getAllArtits().then((res) => {
      console.log(res);
      this.listArtits = res;
      this.s.timeout(500);
      this.loadDone = true;
    });
  }
  async loadPlayList(link, idCat, name) {
    name = name + ' Chủ Đề';
    this.playlistS.savePlaylistLocalStore(link, idCat, name);
    this.routerS.setNavPath(4);
  }
}
