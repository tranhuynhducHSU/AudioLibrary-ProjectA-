import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss'],
})
export class ListSongComponent implements OnInit {
  constructor(public songService: SongService) {}

  ngOnInit(): void {}
}
