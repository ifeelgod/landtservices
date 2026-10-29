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
import drugStation from '../assets/img/drug-station.jpg';
import genderDraw from '../assets/img/gender-draw.jpg';
import kitShipping from '../assets/img/kit-shipping.jpg';
import notarySigning from '../assets/img/notary-signing.jpg';
import fleetCompliance from '../assets/img/fleet-compliance.jpg';
import dnaLab from '../assets/img/dna-lab.jpg';
import complianceCert from '../assets/img/compliance-cert.jpg';
import pricingOffice from '../assets/img/pricing-office.jpg';
import mobileLongview from '../assets/img/mobile-longview.jpg';
import diverseTeam from '../assets/img/diverse-team.jpg';
import dotDriver from '../assets/img/dot-driver.jpg';
import paternityConsult from '../assets/img/paternity-consult.jpg';
import seniorBloodDraw from '../assets/img/senior-blood-draw.jpg';
import corpDrugTest from '../assets/img/corp-drug-test.jpg';
import diverseNotary from '../assets/img/diverse-notary.jpg';
import kiaArrival from '../assets/img/kia-arrival.jpg';
import type { ImgKey } from '../content/types';

/**
 * Image map.
 * Unique commercial photography and client onsite photos for each service area.
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
  drugStation,
  genderDraw,
  kitShipping,
  notarySigning,
  fleetCompliance,
  dnaLab,
  complianceCert,
  pricingOffice,
  mobileLongview,
  diverseTeam,
  dotDriver,
  paternityConsult,
  seniorBloodDraw,
  corpDrugTest,
  diverseNotary,
  kiaArrival,
};
