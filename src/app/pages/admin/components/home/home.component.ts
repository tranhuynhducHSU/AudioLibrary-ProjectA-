import { Component, OnInit } from '@angular/core';
import { AllCatSongService } from 'src/app/services/allCat/all-cat-song.service';
import { ShareService } from 'src/app/services/share/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public cat: AllCatSongService, public s: ShareService) {}

  ngOnInit(): void {}
}
