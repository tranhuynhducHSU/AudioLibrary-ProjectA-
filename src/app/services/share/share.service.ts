import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor(private _snackBar: MatSnackBar) {}
  isLoadDone = false;

  cutString(str, limit: number) {
    let res = '';
    res = str.toString();
    if (res.length > limit) {
      return res.slice(0, limit - 2) + '..';
    } else return str;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['pink-snackbar'],
    });
  }
  timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  getRandomInt(max) {
    max++;
    return Math.floor(Math.random() * max);
  }
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}
