import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AllCatSongService {
  constructor() {
    this.catTrend = [
      {
        cid: 'cat1',
        avarImg: 'cat/trend/denvau-trontim.jpg',
        src: '',
        nameCat: 'Trốn tìm',
        des: 'Đen Vâu',
      },
      {
        cid: 'cat2',
        avarImg: 'cat/trend/Chillies-baonhieu.jpg',
        src: '',
        nameCat: 'Bao nhiêu',
        des: 'Chillies',
      },
      {
        cid: 'cat3',
        avarImg: 'cat/trend/Jack-(J97)LayLaLay.jpg',
        src: '',
        nameCat: '(J97)LayLaLay',
        des: 'Jack',
      },
      {
        cid: 'cat4',
        avarImg: 'cat/trend/sontung-muonroimasaocon.jpg',
        src: '',
        nameCat: 'Muộn rồi mà sao còn',
        des: 'Sơn Tùng',
      },
      {
        cid: 'cat5',
        avarImg: 'cat/trend/Soobin-SlimVThePlayah.jpg',
        src: '',
        nameCat: 'Slim The Playah',
        des: 'Soobin',
      },
    ];
    this.catLike = [
      {
        cid: 'cat',
        avarImg: 'cat/like/kpop.jpg',
        src: '',
        nameCat: 'K-Pop Daebak',
        des: 'Score all the hottest hits from your favourite hallyu star and check out your one true K-Pop playlist!',
      },
      {
        cid: 'cat',
        avarImg: 'cat/like/topnuvn2020.jpg',
        src: '',
        nameCat: 'Top Nữ Nghệ Sĩ 2020',
        des: 'Những nữ nghệ sĩ được nghe nhiều nhất năm 2020 tại Việt Nam. Ảnh bìa: Bích Phương',
      },
      {
        cid: 'cat',
        avarImg: 'cat/like/khiphop.jpg',
        src: '',
        nameCat: 'K-Hip-Hop +82',
        des: 'Representin82 Korean Hip-Hops sickest rhymes and beats. Cover: Lil Cherry',
      },
      {
        cid: 'cat',
        avarImg: 'cat/like/indieViet.jpg',
        src: '',
        nameCat: 'Indie Việt',
        des: 'Nhóm Chillies chiếm sóng Indie Việt để lựa chọn những ca khúc mà họ yêu thích nhất. ',
      },
      {
        cid: 'cat',
        avarImg: 'cat/like/chillhit.jpg',
        src: '',
        nameCat: 'Chill Hits',
        des: 'Kick back to the best new and recent chill tunes.',
      },
    ];
    this.catRec = [
      {
        cid: 'cat',
        avarImg: 'cat/rec/cuchiuthoi',
        src: '',
        nameCat: 'Cứ chill thôi list',
        des: 'By musisity',
      },
      {
        cid: 'cat',
        avarImg: 'cat/rec/buocquamuacodon',
        src: '',
        nameCat: 'Bước qua mùa cô đơn',
        des: 'By musisity',
      },
      {
        cid: 'cat',
        avarImg: 'cat/rec/tinhbankidieu',
        src: '',
        nameCat: 'Tình bạn diệu kì',
        des: 'By musisity',
      },
      {
        cid: 'cat',
        avarImg: 'cat/rec/nangtho',
        src: '',
        nameCat: 'Nàng thơ',
        des: 'By musisity',
      },
      {
        cid: 'cat',
        avarImg: 'cat/rec/missyou',
        src: '',
        nameCat: 'Miss you',
        des: 'By musisity',
      },
    ];
    this.catHitVN = [
      {
        cid: 'cat',
        avarImg: 'cat/hitvn/doahongvn.jpg',
        src: '',
        nameCat: 'Đóa Hồng Nhạc Việt',
        des: 'Một nửa mềm mại của làng nhạc Việt. Ảnh bìa: Thiều Bảo Trâm',
      },
      {
        cid: 'cat',
        avarImg: 'cat/hitvn/vpop.jpg',
        src: '',
        nameCat: 'V-Pop Không Thể Thiếu',
        des: 'V-Pop đã đơm hoa trên những khúc ca này. Ảnh bìa: Đen',
      },
      {
        cid: 'cat',
        avarImg: 'cat/hitvn/haohungvn.jpg',
        src: '',
        nameCat: 'Anh Hào Nhạc Việt',
        des: 'Những nghệ sĩ nam góp phần rạng rỡ cho V-Pop. Ảnh bìa: Soobin Hoàng Sơn',
      },
      {
        cid: 'cat',
        avarImg: 'cat/hitvn/thienhanghegi.jpg',
        src: '',
        nameCat: 'Thiên Hạ Nghe Gì',
        des: 'Những gì mà người bên cạnh bạn đang nghe... Ảnh bìa: Bella Poarch',
      },
      {
        cid: 'cat',
        avarImg: 'cat/hitvn/songcavn.jpg',
        src: '',
        nameCat: 'Song Ca V-Pop',
        des: 'Hai cây chụm lại nên hòn núi cao. Ảnh bìa: Hứa Kim Tuyền, Hoàng Duyên',
      },
    ];
    this.allCat = [this.catTrend, this.catLike, this.catRec, this.catHitVN];
  }
  allCat = [];
  catTrend = [];
  catLike = [];
  catRec = [];
  catHitVN = [];
}
