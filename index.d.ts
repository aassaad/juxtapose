export type JXInput = string|number|HTMLElement;
export type JXFlickrID = string;
export type JXFlickrURL = string;
export type JXFlickrSizePreference = 'Large'|'Medium';
export type JXSliderMode = 'vertical'|'horizontal';
export type JXSliderPosition = number;

export interface JXImageProperties {
  label?: string;
  credit?: string;
  src?: string;
}

export type JXOptimizeResult = {
  OPTIMIZATION_ACCEPTED: 1;
  OPTIMIZATION_WAS_CONSTRAINED: 2;
}

export interface JXGraphic {
  (
    properties: JXImageProperties,
    slider: JXSlider
  ): void;
  self: JXGraphic;
  image: HTMLImageElement;
  loaded: boolean;
  label: string | false;
  credit: string | false;
}


export interface JXFlickrGraphic extends JXGraphic {
  self: JXFlickrGraphic;
  flickrID?: JXFlickrID;
  getJXFlickrID(url: JXFlickrURL): JXFlickrID | null;
  callJXFlickrAPI(id: JXFlickrID, self: JXFlickrGraphic): void;
  setJXFlickrImage(src: JXFlickrURL): void;
  bestFlickUrl(ary: JXFlickrURL[]): JXFlickrURL;
}

export interface JXCallback {
  (slider: JXSlider): void;
}

export interface JXSliderOptions {
  mode: JXSliderMode,
  callback?: JXCallback; // pass a callback function if you like
  startingPosition: JXSliderPosition,
  animate: boolean,
  showLabels: boolean,
  showCredits: boolean,
  makeResponsive: boolean,
}

export interface JXSliderDims {
  height?: number;
  width?: number;
  ratio?: number;
}

export class JXSlider {
  // new (): any;
  updateSlider(input: JXInput, animate: boolean): void;
  getPosition(): JXSliderPosition;
  displayLabel(element: HTMLElement, labelText: string): void;
  displayCredits(): void;
  setStartingPosition(pos: JXSliderPosition): void;
  checkImages(): boolean;
  calculateDims(width: number, height: number);
  responsivizeIframe(dims: JXSliderDims): JXSliderDims;
  setWrapperDimensions(): void;
  optimizeWrapper(maxWidth): number;
  selector: string;
  wrapper?: HTMLElement;
  slider?: HTMLDivElement;
  handle?: HTMLDivElement;
  imgAfter: JXGraphic|JXFlickrGraphic;
  imgBefore: JXGraphic|JXFlickrGraphic;
  leftImage?: HTMLImageElement;
  rightImage?: HTMLImageElement;
  labCredit?: HTMLAnchorElement;
  labLogo?: HTMLDivElement;
  projectName?: HTMLSpanElement;
  leftArrow?: HTMLDivElement;
  rightArrow?: HTMLDivElement;
  control?: HTMLDivElement;
  controller?: HTMLDivElement;
}

declare var juxtapose: {
  makeSlider(element: HTMLElement): void;
  makeSlider(element: HTMLElement, idx?: number): void;
  scanPage(): void;
  sliders: Array<JXSlider>;
  JXSlider;
}

// declare module 'juxtapose' {
//   export default class Juxtapose;
// }
// export declare var juxtapose: Juxtapose;
// export declare juxtapose.JXSlider: JXSlider;

// export * from '.';

// export import Juxtapose = require('.');