import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public songService: SongService) {}

  ngOnInit(): void {
    if (this.songService.songPlaying['sid'] == '') {
      this.songService.songPlaying = this.songService.songs[0];
    }
  }
}
