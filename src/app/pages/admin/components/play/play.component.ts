import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlayerService } from '../../../../services/player/player.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit, AfterViewInit {
  constructor(public playerService: PlayerService) {}
  @ViewChild('audioControl', { static: false })
  audioControl: ElementRef;
  isPlay = false;
  audio: HTMLAudioElement;
  time = 0;
  timeM = 0;
  timeS = 0;
  percentProcess = 0;
  minEnd = 0;
  secEnd = '0';
  volume = -1;
  isMute = 0;
  weight;

  @HostListener('document:keyup.Space') onKeySpaceHandler(
    event: KeyboardEvent
  ) {
    this.play();
  }
  // weight = Number(localStorage.getItem('Volume'));
  @ViewChild('slider') slider;

  ngOnInit(): void {
    if (localStorage.getItem('isMute') != '0') {
      this.weight = 0;
    } else {
      this.weight = Number(localStorage.getItem('Volume'));
    }
  }
  ngAfterViewInit(): void {
    this.audio = this.audioControl.nativeElement as HTMLAudioElement;
    this.audio.src = '../../../../../assets/Songs/SthlmSunset.mp3';
    this.audio.addEventListener('canplaythrough', () => {
      this.minEnd = Math.floor(this.audio.duration / 60);
      this.secEnd = (Math.floor(this.audio.duration % 60) + 1).toString();
      if (Math.floor(this.audio.duration % 60) + 1 < 10) {
        this.secEnd = '0' + this.secEnd;
      }

      if (localStorage.getItem('Volume') == null) {
        localStorage.setItem('Volume', '50');
        this.audio.volume = 0.5;
        this.weight = 50;
      } else {
        this.audio.volume = Number(localStorage.getItem('Volume')) / 100;
        this.volume = Number(localStorage.getItem('Volume'));
      }

      if (localStorage.getItem('isMute') == null) {
        localStorage.setItem('isMute', '0');
      } else {
        this.isMute = Number(localStorage.getItem('isMute'));
        if (this.isMute != 0) {
          this.audio.muted = true;
        } else {
          this.audio.muted = false;
        }
      }
    });
  }
  play() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      this.audio
        .play()
        .then(() => {
          this.audio.addEventListener('timeupdate', (currentTime) => {
            this.time = Math.floor(this.audio.currentTime) + 1;
            if (this.time > 59) {
              this.timeM = Math.floor(this.time / 60);
            }
            this.timeS = Math.floor(this.time % 60);
            this.percentProcess =
              (this.audio.currentTime / this.audio.duration) * 100;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      this.audio.pause();
      console.log('Pause');
    }
  }
  vidEnded() {
    this.isPlay = false;
  }
  changeVolumeTag(value: number) {
    return value;
  }
  setVolume() {
    if (this.volume != -1 && this.isMute == 0) {
      this.audio.volume = this.volume / 100;
      localStorage.setItem('Volume', this.volume.toString());
    } else if (this.isMute != 0) {
      if (this.isMute != this.volume) {
        this.audio.muted = false;
        localStorage.setItem('isMute', '0');
        this.isMute = 0;
      }
    }
  }
  Mute() {
    if (this.volume != 0) {
      if (this.isMute == 0) {
        this.isMute = this.volume;
        this.audio.muted = true;
        localStorage.setItem('isMute', this.volume.toString());
        this.weight = 0;
      } else {
        this.audio.muted = false;
        localStorage.setItem('isMute', '0');
        this.volume = this.isMute;
        this.isMute = 0;
        this.setVolume();
        this.weight = this.volume;
      }
    }
  }
}
