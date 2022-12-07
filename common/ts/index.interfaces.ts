import type { GradientHue, GradientId } from "@types";
import type { MainColors, MiscTags } from "@enums";

export interface Tags {
  readonly mainColors: MainColors[];
  readonly misc: MiscTags[];
}

export interface GradientScheme {
  readonly colors: GradientHue;
  readonly title: string;
  readonly id: string;
  readonly tags?: Tags;
  readonly desc?: string;
}

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
