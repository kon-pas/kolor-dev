import { GradientsJSON } from '@interfaces';
import { v5 as idFromString } from 'uuid';

export const gradients: GradientsJSON = [
  {
    colors: ["#60efff", "#00ff87"],
    title: "Morning Breeze"
  },
  {
    colors: ["#f89b29", "#ff0f7b"],
    title: "Ripe Mirabelle"
  },
  {
    colors: ["#a9ff68", "#ff8989"],
    title: "Fresh Apple"
  },
  {
    colors: ["#9bafd9", "#103783"],
    title: "Navy Blue"
  },
  {
    colors: ["#f8f9c7", "#f2c1ea", "#f67b6b"],
    title: "Sweet Popsicle"
  },
  {
    colors: ["#d3eef4", "#f1eec8", "#f3a46c"],
    title: "Wet Sand"
  },
  {
    colors: ["#FFFF8B", "#f19e18", "#e62314"],
    title: "Red Fox's Tail"
  },
  {
    colors: ["#fff95b", "#ff930f"],
    title: "Amber Gold",
  },
  {
    colors: ["#f3f520", "#59d102"],
    title: "Freshly Cut Grass"
  },
  {
    colors: ["#84ffc9", "#aab2ff", "#eca0ff"],
    title: "Faerie's Dream"
  },
  {
    colors: ["#ebf4f5", "#b5c6e0"],
    title: "Cold Paper"
  },
  {
    colors: ["#fbe9d7", "#f6d5f7"],
    title: "Warm Paper"
  },
  {
    colors: ["#82f4b1", "#30c67c"],
    title: "Faded Lime"
  },
  {
    colors: ["#751006", "#1f0021"],
    title: "Bloody Black"
  },
  {
    colors: ["#00458e", "#000328"],
    title: "Oceans' Depths"
  },
  {
    colors: ["#e4e95d", "#e89d1f"],
    title: "Shades of Lemon"
  },
  {
    colors: ["#affcaf", "#12dff3"],
    title: "Hawaiian Shallows"
  },
  {
    colors: ["#eef2f3", "#8399a2"],
    title: "Tabula Rasa"
  },
  {
    colors: ["#c5f9d7", "#f7d486", "#f27a7d"],
    title: "Ising Model"
  },
  {
    colors: ["#f8dadc", "#b6edc8", "#eeacdc"],
    title: "First Days of Spring"
  },
  {
    colors: ["#9AEEA2", "#f7f065", "#FD9891"],
    title: "Middle of Summer"
  },
  {
    colors: ["#e3e3e3", "#eb8a3d"],
    title: "Autumn's Peace"
  },
  {
    colors: ["#eeddf3", "#FDB5BE", "#6b8080"],
    title: "Warmth of Winter"
  },
  {
    colors: ["#c621e5", "#7d7cf9"],
    title: "Scent of Lavender"
  },
  {
    colors: ["#000000", "#ffffff"],
    title: "Black & White"
  }
]
.map(gradient => ({ 
    [idFromString(gradient.title, "6c87beeb-3545-4d7b-b7e1-610c25720c7d")]: { ...gradient }
}))
.reduce((firstGradient, secondGradient) => ({
  ...firstGradient, ...secondGradient
}));

export default gradients;