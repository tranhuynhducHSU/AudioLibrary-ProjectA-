import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';
import { PlayerService } from '../../../../services/player/player.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit, AfterViewInit {
  constructor(
    public songService: SongService,
    public sv: ShareService,
    public audioS: PlayerService
  ) {}
  @ViewChild('audioControl', { static: false })
  audioControl: ElementRef;
  minEnd = 0;
  secEnd = '0';
  volume = -1;
  isMute = 0;
  weight;

  @HostListener('document:keyup.Space') onKeySpaceHandler(
    event: KeyboardEvent
  ) {
    this.audioS.play();
  }
  @ViewChild('slider') slider;

  ngOnInit(): void {
    if (localStorage.getItem('isMute') != '0') {
      this.weight = 0;
    } else {
      this.weight = Number(localStorage.getItem('Volume'));
    }
  }
  ngAfterViewInit(): void {
    this.audioS.audio = this.audioControl.nativeElement as HTMLAudioElement;
    this.audioS.audio.src =
      '../../../../../assets/Songs/' + this.songService.songPlaying['src'];
    this.audioS.audio.addEventListener('canplaythrough', () => {
      this.minEnd = Math.floor(this.audioS.audio.duration / 60);
      this.secEnd = (
        Math.floor(this.audioS.audio.duration % 60) + 1
      ).toString();
      if (Math.floor(this.audioS.audio.duration % 60) + 1 < 10) {
        this.secEnd = '0' + this.secEnd;
      }

      if (localStorage.getItem('Volume') == null) {
        localStorage.setItem('Volume', '50');
        this.audioS.audio.volume = 0.5;
        this.weight = 50;
      } else {
        this.audioS.audio.volume = Number(localStorage.getItem('Volume')) / 100;
        this.volume = Number(localStorage.getItem('Volume'));
      }

      if (localStorage.getItem('isMute') == null) {
        localStorage.setItem('isMute', '0');
      } else {
        this.isMute = Number(localStorage.getItem('isMute'));
        if (this.isMute != 0) {
          this.audioS.audio.muted = true;
        } else {
          this.audioS.audio.muted = false;
        }
      }
    });
  }
  // play() {
  //   this.songService.isPlay = !this.songService.isPlay;
  //   if (this.songService.isPlay) {
  //     this.audioS.audio
  //       .play()
  //       .then(() => {
  //         this.audioS.audio.addEventListener('timeupdate', (currentTime) => {
  //           this.time = Math.floor(this.audioS.audio.currentTime) + 1;
  //           this.percentProcess =
  //             (this.audioS.audio.currentTime / this.audioS.audio.duration) *
  //             100;
  //         });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } else {
  //     this.audioS.audio.pause();
  //     console.log('Pause');
  //   }
  // }
  getM(time) {
    if (time > 59) {
      return Math.floor(time / 60);
    }
    return 0;
  }
  getS(time) {
    let second = Math.floor(time % 60);
    if (second < 10) {
      return '0' + second.toString();
    }
    return second;
  }
  vidEnded() {
    this.songService.isPlay = false;
  }
  changeVolumeTag(value: number) {
    return value;
  }
  setVolume() {
    if (this.volume != -1 && this.isMute == 0) {
      this.audioS.audio.volume = this.volume / 100;
      localStorage.setItem('Volume', this.volume.toString());
    } else if (this.isMute != 0) {
      if (this.isMute != this.volume) {
        this.audioS.audio.muted = false;
        localStorage.setItem('isMute', '0');
        this.isMute = 0;
      }
    }
  }
  Mute() {
    if (this.volume != 0) {
      if (this.isMute == 0) {
        this.isMute = this.volume;
        this.audioS.audio.muted = true;
        localStorage.setItem('isMute', this.volume.toString());
        this.weight = 0;
      } else {
        this.audioS.audio.muted = false;
        localStorage.setItem('isMute', '0');
        this.volume = this.isMute;
        this.isMute = 0;
        this.setVolume();
        this.weight = this.volume;
      }
    }
  }
}
