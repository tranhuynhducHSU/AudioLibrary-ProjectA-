import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router/router.service';
import { ShareService } from 'src/app/services/share/share.service';
import { SongService } from 'src/app/services/song/song.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, AfterViewInit {
  constructor(
    public songService: SongService,
    private shareService: ShareService,
    public routerService: RouterService
  ) {}
  isLoadDone = false;

  ngOnInit(): void {
    if (this.songService.songPlaying['sid'] == '') {
      this.songService.songPlaying = this.songService.songs[0];
    }
  }
  async ngAfterViewInit() {
    await this.shareService.timeout(2000);
    this.isLoadDone = true;
  }
}
