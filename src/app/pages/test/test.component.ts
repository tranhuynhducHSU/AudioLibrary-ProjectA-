import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  async loginWithGG() {
    await this.userService.loginWithGG();
  }
}
