import type { GradientHue, GradientId, GradientScheme } from "@types";
import type { MainColors, MiscTags } from "@enums";

export interface Tags {
  readonly mainColors: MainColors[];
  readonly misc: MiscTags[];
}

// @@@ DEPRECATED: Scheme declared with `prisma`.
// export interface GradientScheme {
//   id: string;
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

export interface ApiResponse {
  status: number;
  statusText: string;
  ok: boolean;
  body: string | null;
  json: () => Promise<any>;
}
