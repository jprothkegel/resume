import { USM, KIT } from '../config/paths';

export const EDUCATION = ['usm', 'kit'];

export const eduToPhotoMapper = new Map([
  [
    'usm',
    {
      image:
        'https://revista.sansanos.cl/wp-content/uploads/2011/11/utfsm-600x264.jpg',
      link: USM,
    },
  ],
  [
    'kit',
    {
      image:
        'https://static3.ka-news.de/storage/image/8/8/2/8/1578288_cms2image-fixed-760x552_1oC5vT_wWelfj.jpg',
      link: KIT,
    },
  ],
]);
