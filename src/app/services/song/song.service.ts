import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  isPlay = false;
  songs;
  topArtists;
  playLists = [];
  songsStore = [];
  songPlaying = {
    Sid: '',
    Source: '',
    Img: '',
    NameSong: '',
    Artists: '',
    TimeSong: '',
    Index: 0,
  };
  constructor() {
    this.songsStore = [
      {
        Sid: '001',
        Source: 'SthlmSunset',
        Img: '../../../../../assets/Songs/img/Untitled.png',
        NameSong: 'Nu Lounge Bar',
        Artists: 'Ehrling',
        TimeSong: '4:45',
        Index: 0,
      },
      {
        Sid: '002',
        Source: 'DuaLipa-LevitatingFeaturingDaBaby',
        Img: '../../../../../assets/Songs/img/hqdefault.webp',
        NameSong: 'Levitating Featuring DaBaby',
        Artists: 'Dua Lipa',
        TimeSong: '3:55',
        Index: 1,
      },
      {
        Sid: '003',
        Source: 'Saweetie-Fast(Motion)',
        Img: '../../../../../assets/Songs/img/hqdefault(1).webp',
        NameSong: 'Fast (Motion)',
        Artists: 'Saweetie',
        Index: 2,
        TimeSong: '3:10',
      },
      {
        Sid: '004',
        Source: 'TheWeeknd&ArianaGrande-SaveYourTears',
        Img: '../../../../../assets/Songs/img/hqdefault(2).webp',
        NameSong: 'Save Your Tears',
        Artists: 'Ariana Grande',
        Index: 3,
        TimeSong: '3:24',
      },
      {
        Sid: '005',
        Source: 'JustinBieber-Peachesft.DanielCaesar,Giveon',
        Img: '../../../../../assets/Songs/img/hqdefault(3).webp',
        NameSong: 'Peaches ft',
        Artists: 'Justin Bieber',
        Index: 4,
        TimeSong: '4:45',
      },
      {
        Sid: '006',
        Source: 'BebeRexha-Sabotage',
        Img: '../../../../../assets/Songs/img/hqdefault(4).webp',
        NameSong: 'Sabotage',
        Artists: 'Bebe Rexha',
        Index: 5,
        TimeSong: '4:12',
      },
      {
        Sid: '007',
        Source: 'BrunoMars,Anderson.Paak,SilkSonic-LeavetheDoorOpen',
        Img: '../../../../../assets/Songs/img/hqdefault(5).webp',
        NameSong: 'Leave the Door Open',
        Artists: 'Bruno Mars, Anderson .Paak, Silk Sonic',
        Index: 6,
        TimeSong: '3:56',
      },
      {
        Sid: '008',
        Source: 'Anitta-GirlFromRio',
        Img: '../../../../../assets/Songs/img/hqdefault(6).webp',
        NameSong: 'Girl From Rio',
        Artists: 'Anitta',
        Index: 7,
        TimeSong: '3:41',
      },
      {
        Sid: '009',
        Source: 'BebeRexha-BreakMyHeartMyself(feat.TravisBarker)',
        Img: '../../../../../assets/Songs/img/hqdefault(7).webp',
        NameSong: 'Break My Heart Myself',
        Artists: 'Bebe Rexha',
        Index: 8,
        TimeSong: '4:10',
      },
      {
        Sid: '010',
        Source: 'PoloG-RAPSTAR',
        Img: '../../../../../assets/Songs/img/hqdefault(8).webp',
        NameSong: 'RAPSTAR',
        Artists: 'Polo G',
        Index: 9,
        TimeSong: '4:12',
      },
      {
        Sid: '011',
        Source: 'BrysonTiller-OuttaTime(Visualizer)ft.Drake',
        Img: '../../../../../assets/Songs/img/hqdefault(9).webp',
        NameSong: 'Outta Time',
        Artists: 'KillBunk & Dustystaytrue',
        Index: 10,
        TimeSong: '3:41',
      },
      {
        Sid: '012',
        Source: 'LilBabyFeat.MeganTheeStallion-OnMeRemix',
        Img: '../../../../../assets/Songs/img/hqdefault(10).webp',
        NameSong: 'On Me Remix',
        Artists: 'Lil Baby',
        Index: 11,
        TimeSong: '2:45',
      },
    ];
    this.topArtists = [
      {
        name: 'Roddy Ricch',
        img: '../../../../../assets/TopArtitts/13rG4v8C_400x400.jpg',
      },
      {
        name: 'Taylor Swift',
        img: '../../../../../assets/TopArtitts/Taylor-Swift-6612-1583461788.jpg',
      },
      {
        name: 'The Weeknd',
        img: '../../../../../assets/TopArtitts/the_weeknd.jpg',
      },
      {
        name: 'Billie Eilish',
        img: '../../../../../assets/TopArtitts/ava2.jpg',
      },
    ];
    this.playLists = [
      {
        name: 'Top US, UK',
        img: '../../../../../assets/Playlists/1481530161430_500.jpg',
      },
      {
        name: 'Family',
        img: '../../../../../assets/Playlists/ab67706c0000bebb928b6f9e192f9dfa46d78775.jpg',
      },
      {
        name: 'Hot US, UK',
        img: '../../../../../assets/Playlists/../../../../../assets/Playlists/1601454717373.jpg',
      },
    ];
  }
}
