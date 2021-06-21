import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllCatSongService {
  constructor() {}
  allCat = [];
  catTrend;
  artists = [];
  allTops = [];
}
