import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SongService } from '../song/song.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(public songService: SongService) {}
  audio: HTMLAudioElement;
  time = 0;
  percentProcess = 0;
  // play() {
  //   this.songService.isPlay = !this.songService.isPlay;
  //   if (this.songService.isPlay) {
  //     this.audio
  //       .play()
  //       .then(() => {
  //         this.audio.addEventListener('timeupdate', (currentTime) => {
  //           this.time = Math.floor(this.audio.currentTime) + 1;
  //           this.percentProcess =
  //             (this.audio.currentTime / this.audio.duration) * 100;
  //         });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     this.audio.pause();
  //     console.log('Pause');
  //   }
  // }
  play() {
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
        console.error(err);
      });
  }
  pause() {
    this.songService.isPlay = false;
    this.audio.pause();
    console.log('Pause');
  }
}
