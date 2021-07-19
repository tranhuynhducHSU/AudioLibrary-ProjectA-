import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ShareService } from 'src/app/services/share/share.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/component/dialog/login/login-dialog/login-dialog.component';

@Component({
  selector: 'app-head-search-and-user',
  templateUrl: './head-search-and-user.component.html',
  styleUrls: ['./head-search-and-user.component.scss'],
})
export class HeadSearchAndUserComponent implements OnInit {
  constructor(
    public userS: UserService,
    public shareS: ShareService,
    public dialog: MatDialog
  ) {}
  user = this.userS.user;
  ngOnInit(): void {}

  async login() {
    await this.userS.loginWithGG();
    this.user = this.userS.user;
  }
  logout() {
    this.userS.logOut();
  }
}
