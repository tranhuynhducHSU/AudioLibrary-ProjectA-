import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { RouterService } from './services/router/router.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private platformLocation: PlatformLocation,
    private routerS: RouterService
  ) {}
  title = 'ChessFrontEnd';
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.routerS.setNavPathWithPath(
      (this.platformLocation as any).location.pathname
    );
  }
}
