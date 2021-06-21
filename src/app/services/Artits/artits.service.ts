import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ArtitsService {
  constructor(private http: HttpClient) {}

  async getAllArtits() {
    let res = await this.http
      .get(environment.localhost + 'artists')
      .toPromise();
    return res;
  }
  async getArtits(count) {
    let res = await this.http
      .get(environment.localhost + 'artists', {
        params: {
          count: count,
        },
      })
      .toPromise();
    return res;
  }
}
