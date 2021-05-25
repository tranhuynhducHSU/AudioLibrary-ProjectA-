import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor(private _snackBar: MatSnackBar) {}
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
}
