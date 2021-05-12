import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  songs = [];
  topArtists = [];
  playList = [];
  constructor() {
    this.songs = [
      {
        avarImg: 'Untitled.png',
        nameSong: 'Nu Lounge Bar',
        nameArtist: 'EHRLING',
        timeSong: '4:45',
        isActivate: false,
      },
      {
        avarImg: 'hqdefault.webp',
        nameSong: 'Levitating Featuring DaBaby',
        nameArtist: 'Dua Lipa',
        timeSong: '3:55',
        isActivate: false,
      },
      {
        avarImg: 'hqdefault(1).webp',
        nameSong: 'Fast (Motion)',
        nameArtist: 'Saweetie',
        isActivate: true,
        timeSong: '3:10',
      },
      {
        avarImg: 'hqdefault(2).webp',
        nameSong: 'Save Your Tears',
        nameArtist: 'Ariana Grande',
        isActivate: false,
        timeSong: '3:24',
      },
      {
        avarImg: 'hqdefault(3).webp',
        nameSong: 'Peaches ft',
        nameArtist: 'Justin Bieber',
        isActivate: false,
        timeSong: '4:45',
      },
      {
        avarImg: 'hqdefault(4).webp',
        nameSong: 'Sabotage',
        nameArtist: 'Bebe Rexha',
        isActivate: false,
        timeSong: '4:12',
      },
      {
        avarImg: 'hqdefault(5).webp',
        nameSong: 'Leave the Door Open',
        nameArtist: 'Bruno Mars, Anderson .Paak, Silk Sonic',
        isActivate: false,
        timeSong: '3:56',
      },
      // {
      //   avarImg: 'hqdefault(6).webp',
      //   nameSong: 'Girl From Rio',
      //   nameArtist: 'Anitta',
      //   isActivate: false,
      //   timeSong: '3:41',
      // },
      // {
      //   avarImg: 'hqdefault(7).webp',
      //   nameSong: 'Break My Heart Myself',
      //   isActivate: false,
      //   nameArtist: 'Bebe Rexha',
      //   timeSong: '4:10',
      // },
      // {
      //   avarImg: 'hqdefault(8).webp',
      //   nameSong: 'RAPSTAR',
      //   nameArtist: 'Polo G',
      //   isActivate: false,
      //   timeSong: '4:12',
      // },
      // {
      //   avarImg: 'hqdefault(9).webp',
      //   nameSong: 'Outta Time',
      //   nameArtist: 'KillBunk & Dustystaytrue',
      //   isActivate: false,
      //   timeSong: '3:41',
      // },
      // {
      //   avarImg: 'hqdefault(10).webp',
      //   nameSong: 'On Me Remix',
      //   nameArtist: 'Lil Baby',
      //   isActivate: false,
      //   timeSong: '2:45',
      // },
    ];

    this.topArtists = [
      { nameArtis: 'Roddy Ricch', imgArtis: '13rG4v8C_400x400.jpg' },
      {
        nameArtis: 'Taylor Swift',
        imgArtis: 'Taylor-Swift-6612-1583461788.jpg',
      },
      { nameArtis: 'The Weeknd', imgArtis: 'the_weeknd.jpg' },
      { nameArtis: 'Billie Eilish', imgArtis: 'ava2.jpg' },
      // { nameArtis: 'Pop Smoke', imgArtis: '74217471.jpg' },
    ];
    this.playList = [
      {
        namePlayList: 'Top US, UK',
        time: '2016',
        imgPlayList: '1481530161430_500.jpg',
      },
      {
        namePlayList: 'Family',
        time: '2021',
        imgPlayList: 'ab67706c0000bebb928b6f9e192f9dfa46d78775.jpg',
      },
      {
        namePlayList: 'Hot US, UK',
        time: '2019',
        imgPlayList: '1601454717373.jpg',
      },
    ];
  }
}
