import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { SongService } from '../song/song.service';
import { ArtitsService } from '../Artits/artits.service';
import { AllCatSongService } from '../allCat/all-cat-song.service';
import { RouterService } from '../router/router.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  constructor(
    private http: HttpClient,
    private songS: SongService,
    private artitsS: ArtitsService,
    public cat: AllCatSongService,
    private routerS: RouterService
  ) {}
  playlistsForPage;
  async getSongOfPlayList(id) {
    let res = await this.http
      .get(environment.localhost + 'song/playlist', {
        params: {
          id: id,
        },
      })
      .toPromise();
    return res;
  }
  async getSongOfPlayListWithLink(link) {
    let res = await this.http
      .get(environment.localhost + 'song/playlist', {
        params: {
          link: link,
        },
      })
      .toPromise();
    return res;
  }
  async getPlaylistsOfCat(id) {
    let res = await this.http
      .get(environment.localhost + 'category', {
        params: {
          id: id,
        },
      })
      .toPromise();
    return res;
  }
  async getPlaylists(indexNext) {
    let res = await this.http
      .get(environment.localhost + 'playlist', {
        params: {
          indexNext: indexNext,
        },
      })
      .toPromise();
    return res;
  }
  async loadPlayListForPage(link, catId, catName) {
    this.songS.topArtists = await this.artitsS.getArtits(4);
    let tempList = await this.getPlaylistsOfCat(catId);
    this.songS.playLists = [];
    for (let i = 0; ; i++) {
      if (tempList[i]['idSpotify'] != link) {
        this.songS.playLists.push(tempList[i]);
      }
      if (this.songS.playLists.length == 3 || i == 5) {
        break;
      }
    }
    await this.getSongOfPlayListWithLink(link).then((res) => {
      if (res != null) {
        this.songS.songs = res;
        this.savePlaylistLocalStore(link, catId, catName);
      }
    });
  }
  savePlaylistLocalStore(link, idCat, catName) {
    localStorage.setItem('playlistLink', link);
    localStorage.setItem('playlistCatID', idCat);
    localStorage.setItem('playlistCatName', catName);
  }
}
