import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}
  cutString(str, limit: number) {
    let res = '';
    res = str.toString();
    if (res.length > limit) {
      return res.slice(0, 13) + '..';
    } else return str;
  }
}
