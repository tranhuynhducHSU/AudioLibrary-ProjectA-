import { Injectable } from '@angular/core';
import Hls from 'hls.js';
import { Observable, Subject } from 'rxjs';
import { ShareService } from '../share/share.service';
import { SongService } from '../song/song.service';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(
    public songService: SongService,
    private shareService: ShareService
  ) {}
  audio: HTMLAudioElement;
  hls = new Hls();
  time = 0;
  percentProcess = 0;
  changeSong(song) {
    this.songService.isPlay = true;
    this.songService.songPlaying = song;
    this.hls.destroy();
    this.hls = new Hls();
    this.hls.loadSource(
      environment.endpoint + song['src'] + '/outputlist.m3u8'
    );
    this.hls.attachMedia(this.audio);
    this.play(false);
  }
  play(isLoading) {
    if (isLoading) {
      this.shareService.openSnackBar('Wait for second..', 'OK');
    } else {
      this.songService.isPlay = true;
      this.audio
        .play()
        .then(() => {
          this.audio.addEventListener('timeupdate', (currentTime) => {
            this.time = Math.floor(this.audio.currentTime) + 1;
            this.percentProcess =
              (this.audio.currentTime / this.audio.duration) * 100;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  pause() {
    this.songService.isPlay = false;
    this.audio.pause();
    console.log('Pause');
  }
}
