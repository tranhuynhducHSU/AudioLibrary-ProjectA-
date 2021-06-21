import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-list-top-artis',
  templateUrl: './list-top-artis.component.html',
  styleUrls: ['./list-top-artis.component.scss'],
})
export class ListTopArtisComponent implements OnInit {
  constructor(public songService: SongService) {}

  ngOnInit(): void {}
}
