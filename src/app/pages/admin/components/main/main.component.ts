import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public songService: SongService) {}

  ngOnInit(): void {}
}
