import * as TYPES from '@types';
import * as ENUMS from '@enums';

export interface Tags {
  temperature: "warm" | "cold",
  mainColors: ENUMS.MainColors,
  misc?: [ENUMS.MiscTags]
}

export interface Gradient {
  colors: TYPES.GradientHue,
  title: string,
  tags?: Tags,
  desc?: string
}