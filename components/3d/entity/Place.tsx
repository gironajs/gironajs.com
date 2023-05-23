import { IconType } from 'react-icons';
import * as THREE from 'three';

export default class Place {
  id: string;
  navbarNameI18nKey: string;
  icon: IconType; //https://legacy.reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
  orbitControlTarget: OrbitControlTarget;
  billboardPosition: THREE.Vector3;
  isDebug: boolean; //debug elements are not shown in the oficial UI
  showBillboard: boolean;
  titleI18nKey: string;
  subtitleI18nKey: string;
  googleMapsUrl: string | null;
  websiteUrl: string | null;
  wikiUrl: string | null;
  descriptionHtmlI18nKey: string;
  images: [string, string];

  constructor(
    id: string,
    navbarNameI18nKey: string,
    icon: IconType,
    orbitControlTarget: OrbitControlTarget,
    billboardPosition: THREE.Vector3,
    isDebug: boolean,
    showBillboard: boolean,
    titleI18nKey: string,
    subtitleI18nKey: string,
    descriptionHtmlI18nKey: string,
    googleMapsUrl: string | null,
    websiteUrl: string | null,
    wikiUrl: string | null,
    images: [string, string]
  ) {
    this.id = id;
    this.navbarNameI18nKey = navbarNameI18nKey;
    this.icon = icon;
    this.orbitControlTarget = orbitControlTarget;
    this.billboardPosition = billboardPosition;
    this.isDebug = isDebug;
    this.showBillboard = showBillboard;
    this.titleI18nKey = titleI18nKey;
    this.subtitleI18nKey = subtitleI18nKey;
    this.googleMapsUrl = googleMapsUrl;
    this.websiteUrl = websiteUrl;
    this.wikiUrl = wikiUrl;
    this.descriptionHtmlI18nKey = descriptionHtmlI18nKey;
    this.images = images;
  }
}

export class OrbitControlTarget {
  zoomDistance: number;
  target: THREE.Vector3;

  constructor(target: THREE.Vector3, zoomDistance: number) {
    this.zoomDistance = zoomDistance;
    this.target = target;
  }
}
