import * as TYPES from '@types';
import * as ENUMS from '@enums';

export interface Tags {
  readonly temperature: "warm" | "cold",
  readonly mainColors: ENUMS.MainColors,
  readonly misc?: [ENUMS.MiscTags]
}

export interface GradientScheme {
  readonly colors: TYPES.GradientHue,
  readonly title: string,
  readonly id: TYPES.Id,
  readonly tags?: Tags,
  readonly desc?: string
}

export interface GradientsJSON {
  readonly [key: TYPES.Id]: Omit<GradientScheme, TYPES.Id>
}