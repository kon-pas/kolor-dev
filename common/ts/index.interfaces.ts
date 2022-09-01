import * as TYPES from '@types';
import * as ENUMS from '@enums';

export interface Tags {
  temperature: "warm" | "cold",
  mainColors: ENUMS.MainColors,
  misc?: [ENUMS.MiscTags]
}

export interface GradientScheme {
  colors: TYPES.GradientHue,
  title: string,
  id: TYPES.Id,
  tags?: Tags,
  desc?: string
}

export interface GradientsJSON {
  [key: TYPES.Id]: Omit<GradientScheme, TYPES.Id>
}