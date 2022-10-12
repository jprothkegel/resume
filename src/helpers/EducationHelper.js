import { USM, KIT } from '../config/paths';

export const EDUCATION = ['usm', 'kit'];

export const eduToPhotoMapper = new Map([
  [
    'usm',
    {
      image:
        'https://www.bu.edu/pasi/files/2010/06/usm-evening640x480.jpg',
      link: USM,
    },
  ],
  [
    'kit',
    {
      image:
        'https://bilder.t-online.de/b/86/12/61/86/id_86126186/tid_da/logo-schriftzug-kit-karlsruhe-institut-of-technology-messe-cebit-2018-oeffnet-in-hannover-ihre-tore.jpg',
      link: KIT,
    },
  ],
]);
