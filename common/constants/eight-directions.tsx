// @@@ NOTE: I am not sure if this is a good design pattern.

import type { LongEightDirection } from "@types";

const EIGHT_DIRECTIONS: {
  label: LongEightDirection;
  iconPath: JSX.Element;
}[] = [
  {
    label: "to right",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    ),
  },
  {
    label: "to bottom right",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
      />
    ),
  },
  {
    label: "to bottom",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    ),
  },
  {
    label: "to bottom left",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
      />
    ),
  },
  {
    label: "to left",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    ),
  },
  {
    label: "to top left",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25"
      />
    ),
  },
  {
    label: "to top",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    ),
  },
  {
    label: "to top right",
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    ),
  },
];

export default EIGHT_DIRECTIONS;
