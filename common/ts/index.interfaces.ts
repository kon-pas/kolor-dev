import type {
  GradientHue,
  GradientId,
  GradientScheme,
  LongEightDirection,
} from "@types";
import type { MainColor, MiscTag } from "@enums";

export interface Tags {
  readonly colors: MainColor[];
  readonly misc: MiscTag[];
}

// @@@ DEPRECATED: Scheme declared with Prisma.
// export interface GradientScheme {
//   id: GradientId;
//   colors: GradientHue;
//   title: string;
//   tags?: Tags;
//   desc?: string;
// }

export interface GradientsJSON {
  readonly [key: GradientId]: GradientScheme;
}

export interface NavItem {
  readonly label: string;
  readonly path: string | null;
}

// @@@ DEPRECATED: Got rid of fake API.
// export interface ApiResponse {
//   status: number;
//   statusText: string;
//   ok: boolean;
//   body: string | null;
//   json: () => Promise<any>;
// }

export interface CustomGradientScheme {
  title: string;
  colors: GradientHue;
  direction: LongEightDirection;
}

export interface GradientsFilters {
  name: string;
  misc: MiscTag[];
  colors: MainColor[];
  liked: boolean;
}
