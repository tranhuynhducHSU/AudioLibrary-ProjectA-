import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.scss'],
})
export class PlayListComponent implements OnInit {
  constructor(public songService: SongService) {}

  ngOnInit(): void {}
}
