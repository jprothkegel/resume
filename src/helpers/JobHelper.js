export const JOBS = ['matterway','ripley', 'pucv', 'ibm'];
import { RIPLEY, PUCV, IBM, MATTERWAY } from '../config/paths';
import RipleyLogo from '../assets/ripley-logo.png';
import PucvLogo from '../assets/4209px-PUCV_Escudo2016.svg.png';
import IbmLogo from '../assets/saupload_IBM-logo.jpeg';
import MatterwayLogo from '../assets/matt.jpg'

export const jobMapper = new Map([
  ['matterway', { link: MATTERWAY, image: MatterwayLogo }],
  ['ripley', { link: RIPLEY, image: RipleyLogo }],
  ['pucv', { link: PUCV, image: PucvLogo }],
  ['ibm', { link: IBM, image: IbmLogo }],
]);
