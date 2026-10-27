import type { ImageMetadata } from 'astro';
import blood from '../assets/img/home-blood-draw.jpg';
import mobile from '../assets/img/mobile-unit.jpg';
import clinic from '../assets/img/clinic.jpg';
import dna from '../assets/img/dna-kit.jpg';
import office from '../assets/img/office.jpg';
import officeDesk from '../assets/img/office-desk.jpg';
import centrifuge from '../assets/img/centrifuge.jpg';
import storefront from '../assets/img/storefront.jpg';
import entering from '../assets/img/entering.jpg';
import drawReal from '../assets/img/draw-real.jpg';
import type { ImgKey } from '../content/types';

/**
 * Image map.
 * blood/mobile/clinic/dna are placeholder AI-generated photography.
 * office/officeDesk/centrifuge/storefront/entering/drawReal are client/Gemini onsite photos.
 */
export const IMAGES: Record<ImgKey, ImageMetadata> = {
  blood,
  mobile,
  clinic,
  dna,
  office,
  officeDesk,
  centrifuge,
  storefront,
  entering,
  drawReal,
};
