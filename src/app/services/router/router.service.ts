import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {
    if (localStorage.getItem('navPath') == null) {
      localStorage.setItem('navPath', '0');
    }
    this.navPath = Number(localStorage.getItem('navPath'));
  }
  navPath;
  setNavPath(num) {
    if (num == 0) {
      this.router.navigate(['home']);
    } else if (num == 1) {
      this.router.navigate(['playlists']);
    } else if (num == 2) {
      this.router.navigate(['artists']);
    } else if (num == 3) {
      this.router.navigate(['chart']);
    } else if (num == 4) {
      this.router.navigate(['songs']);
    } else if (num == 5) {
      this.router.navigate(['store']);
    } else if (num == 6) {
    } else if (num == 7) {
    } else if (num == 8) {
    } else if (num == 9) {
    }
    this.navPath = num;
    localStorage.setItem('navPath', num);
  }
  // Home      -0
  // Playlist  -1
  // Artist    -2
  // Albums    -3
  // Songs     -4
  // Store     -5
  // Liked     -6
  // Settings  -7
  // ASongs    -8
  // Users     -9

  setNavPathWithPath(path) {
    let num = -1;
    if (path == '/home') {
      num = 0;
    } else if (path == '/playlists') {
      num = 1;
    } else if (path == '/artists') {
      num = 2;
    } else if (path == '/chart') {
      num = 3;
    } else if (path == '/songs') {
      num = 4;
    } else if (path == '/') {
      num = 5;
    } else if (path == '/') {
      num = 6;
    } else if (path == '/') {
      num = 7;
    } else if (path == '/') {
      num = 8;
    } else if (path == '/') {
      num = 9;
    }
    this.navPath = num;
    localStorage.setItem('navPath', num.toString());
  }
}
