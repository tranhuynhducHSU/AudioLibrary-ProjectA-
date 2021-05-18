import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.scss'],
})
export class SongItemComponent implements OnInit {
  constructor(public songService: SongService, public audioS: PlayerService) {}
  @Input()
  song: any;

  ngOnInit(): void {}
  changeSong() {
    this.songService.isPlay = true;
    this.songService.songPlaying = this.song;
    this.audioS.audio.src =
      '../../../../../assets/Songs/' + this.songService.songPlaying['src'];
    this.audioS.audio.addEventListener('canplaythrough', () => {
      this.audioS.play();
    });
  }
}
