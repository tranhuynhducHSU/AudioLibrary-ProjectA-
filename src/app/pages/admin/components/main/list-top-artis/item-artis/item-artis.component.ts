import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-artis',
  templateUrl: './item-artis.component.html',
  styleUrls: ['./item-artis.component.scss'],
})
export class ItemArtisComponent implements OnInit {
  constructor() {}

  @Input()
  artis: any;

  ngOnInit(): void {}
}
