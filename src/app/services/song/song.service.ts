import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  isPlay = false;
  songs = [];
  topArtists = [];
  playList = [];

  songPlaying = {
    sid: '',
    src: '',
    avarImg: '',
    nameSong: '',
    nameArtist: '',
    timeSong: '',
  };
  constructor() {
    this.songs = [
      {
        sid: '001',
        src: 'SthlmSunset.mp3',
        avarImg: 'Untitled.png',
        nameSong: 'Nu Lounge Bar',
        nameArtist: 'Ehrling',
        timeSong: '4:45',
      },
      {
        sid: '002',
        src: 'Dua Lipa - Levitating Featuring DaBaby (Official Music Video).mp3',
        avarImg: 'hqdefault.webp',
        nameSong: 'Levitating Featuring DaBaby',
        nameArtist: 'Dua Lipa',
        timeSong: '3:55',
      },
      {
        sid: '003',
        src: 'Saweetie - Fast (Motion) [Official Music Video].mp3',
        avarImg: 'hqdefault(1).webp',
        nameSong: 'Fast (Motion)',
        nameArtist: 'Saweetie',
        timeSong: '3:10',
      },
      {
        sid: '004',
        src: 'The Weeknd & Ariana Grande - Save Your Tears (Remix) (Official Video).mp3',
        avarImg: 'hqdefault(2).webp',
        nameSong: 'Save Your Tears',
        nameArtist: 'Ariana Grande',
        timeSong: '3:24',
      },
      {
        sid: '005',
        src: 'Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3',
        avarImg: 'hqdefault(3).webp',
        nameSong: 'Peaches ft',
        nameArtist: 'Justin Bieber',
        timeSong: '4:45',
      },
      {
        sid: '006',
        src: 'Bebe Rexha - Sabotage [Official Music Video].mp3',
        avarImg: 'hqdefault(4).webp',
        nameSong: 'Sabotage',
        nameArtist: 'Bebe Rexha',
        timeSong: '4:12',
      },
      {
        sid: '007',
        src: 'Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open [Official Video].mp3',
        avarImg: 'hqdefault(5).webp',
        nameSong: 'Leave the Door Open',
        nameArtist: 'Bruno Mars, Anderson .Paak, Silk Sonic',
        timeSong: '3:56',
      },
      {
        sid: '008',
        src: '',
        avarImg: 'hqdefault(6).webp',
        nameSong: 'Girl From Rio',
        nameArtist: 'Anitta',
        timeSong: '3:41',
      },
      {
        sid: '009',
        src: '',
        avarImg: 'hqdefault(7).webp',
        nameSong: 'Break My Heart Myself',
        nameArtist: 'Bebe Rexha',
        timeSong: '4:10',
      },
      {
        sid: '009',
        src: '',
        avarImg: 'hqdefault(8).webp',
        nameSong: 'RAPSTAR',
        nameArtist: 'Polo G',
        timeSong: '4:12',
      },
      {
        sid: '010',
        src: '',
        avarImg: 'hqdefault(9).webp',
        nameSong: 'Outta Time',
        nameArtist: 'KillBunk & Dustystaytrue',
        timeSong: '3:41',
      },
      {
        sid: '011',
        src: '',
        avarImg: 'hqdefault(10).webp',
        nameSong: 'On Me Remix',
        nameArtist: 'Lil Baby',
        timeSong: '2:45',
      },
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
