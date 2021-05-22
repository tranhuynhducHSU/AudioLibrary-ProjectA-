import { Component, Input, OnInit } from '@angular/core';
import Hls from 'hls.js';
import { PlayerService } from 'src/app/services/player/player.service';
import { SongService } from 'src/app/services/song/song.service';
import { environment } from 'src/environments/environment.prod';

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
    this.audioS.changeSong(this.song);
  }
}
