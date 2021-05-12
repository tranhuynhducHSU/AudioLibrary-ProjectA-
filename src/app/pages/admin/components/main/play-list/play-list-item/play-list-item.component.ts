import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-list-item',
  templateUrl: './play-list-item.component.html',
  styleUrls: ['./play-list-item.component.scss'],
})
export class PlayListItemComponent implements OnInit {
  constructor() {}

  @Input()
  playListItem: any;

  ngOnInit(): void {}
}
