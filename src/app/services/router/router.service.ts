import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  path = 0;

  constructor() {
    if (localStorage.getItem('path') == null) {
      localStorage.setItem('path', '0');
    }
    this.path = Number(localStorage.getItem('path'));
    console.log(localStorage.getItem('path'));
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
}
