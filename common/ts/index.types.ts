export type HexColor = string;

export type GradientHue = readonly HexColor[];

export type GradientId = string;

export type FourDirections =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'

export type EightDirections =
  | 'top'
  | 'top right'
  | 'right'
  | 'bottom right'
  | 'bottom'
  | 'bottom left'
  | 'left'
  | 'top left'
