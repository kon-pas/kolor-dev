// @@@ NOTE: This is a mess but almost never used.g
// As for now, its only purpose is to seed database and gets the job done.
// See `@database/seed-database`.

import type { GradientsJSON } from "@interfaces";
import { MainColor, MiscTag } from "@enums";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  8
);

export const gradients: GradientsJSON = [
  {
    colors: ["#84ffc9", "#aab2ff", "#eca0ff"],
    title: "Faerie's Dream",
    tags: {
      colors: [MainColor.Green, MainColor.Blue, MainColor.Purple],
      misc: [MiscTag.Magic, MiscTag.Intense],
    },
  },
  {
    colors: ["#60efff", "#00ff87"],
    title: "Morning Breeze",
    tags: {
      colors: [MainColor.Blue, MainColor.Green],
      misc: [MiscTag.Intense],
    },
  },
  {
    colors: ["#BFFF00", "#60F10A"],
    title: "Guilty Lime",
    tags: {
      colors: [MainColor.Green],
      misc: [MiscTag.Intense, MiscTag.Mono],
    },
  },
  {
    colors: ["#f89b29", "#ff0f7b"],
    title: "Ripe Mirabelle",
    tags: {
      colors: [MainColor.Orange, MainColor.Pink],
      misc: [MiscTag.Intense, MiscTag.Warm],
    },
  },
  {
    colors: ["#a9ff68", "#ff8989"],
    title: "Fresh Apple",
    tags: {
      colors: [MainColor.Green, MainColor.Red],
      misc: [MiscTag.Warm, MiscTag.Varied],
    },
  },
  {
    colors: ["#9bafd9", "#103783"],
    title: "Navy Blue",
    tags: {
      colors: [MainColor.Blue],
      misc: [MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#f8f9c7", "#f2c1ea", "#f67b6b"],
    title: "Sweet Popsicle",
    tags: {
      colors: [MainColor.Yellow, MainColor.Pink, MainColor.Orange],
      misc: [MiscTag.Calm, MiscTag.Varied, MiscTag.Magic],
    },
  },
  {
    colors: ["#d3eef4", "#f1eec8", "#f3a46c"],
    title: "Wet Sand",
    tags: {
      colors: [MainColor.Blue, MainColor.Yellow, MainColor.Orange],
      misc: [MiscTag.Light, MiscTag.Calm, MiscTag.Varied],
    },
  },
  {
    colors: ["#FFFF8B", "#f19e18", "#e62314"],
    title: "Red Fox's Tail",
    tags: {
      colors: [MainColor.Yellow, MainColor.Orange, MainColor.Red],
      misc: [MiscTag.Intense, MiscTag.Warm],
    },
  },
  {
    colors: ["#fff95b", "#ff930f"],
    title: "Amber Gold",
    tags: {
      colors: [MainColor.Yellow, MainColor.Orange],
      misc: [MiscTag.Intense, MiscTag.Warm],
    },
  },
  {
    colors: ["#f3f520", "#59d102"],
    title: "Freshly Cut Grass",
    tags: {
      colors: [MainColor.Yellow, MainColor.Green],
      misc: [MiscTag.Intense],
    },
  },
  {
    colors: ["#ebf4f5", "#b5c6e0"],
    title: "Cold Paper",
    tags: {
      colors: [MainColor.White, MainColor.Gray],
      misc: [MiscTag.Light, MiscTag.Calm, MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#fbe9d7", "#f6d5f7"],
    title: "Warm Paper",
    tags: {
      colors: [MainColor.Pink],
      misc: [MiscTag.Light, MiscTag.Calm, MiscTag.Mono],
    },
  },
  {
    colors: ["#82f4b1", "#30c67c"],
    title: "Faded Lime",
    tags: {
      colors: [MainColor.Green],
      misc: [MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#751006", "#1f0021"],
    title: "Bloody Black",
    tags: {
      colors: [MainColor.Red, MainColor.Black],
      misc: [MiscTag.Dark, MiscTag.Mono],
    },
  },
  {
    colors: ["#00458e", "#000328"],
    title: "Oceans' Depths",
    tags: {
      colors: [MainColor.Blue, MainColor.Black],
      misc: [MiscTag.Dark, MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#e4e95d", "#e89d1f"],
    title: "Shades of Lemon",
    tags: {
      colors: [MainColor.Yellow],
      misc: [MiscTag.Intense, MiscTag.Mono],
    },
  },
  {
    colors: ["#affcaf", "#12dff3"],
    title: "Hawaiian Shallows",
    tags: {
      colors: [MainColor.Blue],
      misc: [MiscTag.Intense, MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#eef2f3", "#8399a2"],
    title: "Tabula Rasa",
    tags: {
      colors: [MainColor.White, MainColor.Gray],
      misc: [MiscTag.Light, MiscTag.Calm, MiscTag.Cold, MiscTag.Mono],
    },
  },
  {
    colors: ["#c5f9d7", "#f7d486", "#f27a7d"],
    title: "Ising Model",
    tags: {
      colors: [MainColor.Blue, MainColor.Yellow, MainColor.Red],
      misc: [MiscTag.Varied],
    },
  },
  {
    colors: ["#f8dadc", "#b6edc8", "#eeacdc"],
    title: "First Days of Spring",
    tags: {
      colors: [MainColor.Pink, MainColor.Green, MainColor.Purple],
      misc: [MiscTag.Light, MiscTag.Magic, MiscTag.Varied],
    },
  },
  {
    colors: ["#9AEEA2", "#f7f065", "#FD9891"],
    title: "Middle of Summer",
    tags: {
      colors: [MainColor.Green, MainColor.Yellow, MainColor.Red],
      misc: [MiscTag.Intense, MiscTag.Varied],
    },
  },
  {
    colors: ["#e3e3e3", "#eb8a3d"],
    title: "Autumn's Peace",
    tags: {
      colors: [MainColor.Gray, MainColor.Orange],
      misc: [MiscTag.Calm],
    },
  },
  {
    colors: ["#eeddf3", "#FDB5BE", "#6b8080"],
    title: "Warmth of Winter",
    tags: {
      colors: [MainColor.Pink, MainColor.Gray],
      misc: [MiscTag.Intense, MiscTag.Varied],
    },
  },
  {
    colors: ["#c621e5", "#7d7cf9"],
    title: "Scent of Lavender",
    tags: {
      colors: [MainColor.Purple],
      misc: [MiscTag.Magic, MiscTag.Intense, MiscTag.Mono],
    },
  },
  {
    colors: ["#000000", "#ffffff"],
    title: "Black & White",
    tags: {
      colors: [MainColor.Black, MainColor.White],
      misc: [MiscTag.Light, MiscTag.Dark],
    },
  },
]
  .map((gradient, idx) => {
    // [`vENCrfkC${idx}`]: {
    // const id = nanoid();
    return {
      [idx]: {
        ...gradient,
        // id: `vENCrfkC${idx}`,
        id: nanoid(),
        desc: null,
      },
    };
  })
  .reduce((firstGradient, secondGradient) => ({
    ...firstGradient,
    ...secondGradient,
  }));

export default gradients;
