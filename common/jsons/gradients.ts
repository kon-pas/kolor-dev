import { GradientScheme } from '@interfaces';
import { v5 as idFromString } from 'uuid';

export const gradients: GradientScheme[] = [
  {
    colors: ["#C3FF99", "#EC7272"],
    title: "Memories of Spring",
  },
  {
    colors: ["#FFF5E4", "#EE6983"],
    title: "Strawberry Ice Creams"
  },
  {
    colors: ["#6FEDD6", "#FF9551", "#FF4A4A"],
    title: "Sweet Popsicle"
  },
  {
    colors: ["#FFF38C", "#C0B236"],
    title: "Shades of Lemon"
  },
  {
    colors: ["#F7F7F7", "#FFE61B", "#B5FE83"],
    title: "Citrus Sorbet"
  },
  {
    colors: ["#CC9544", "#603601", "#1C0A00"],
    title: "Dark Chocolate"
  },
  {
    colors: ["#C1F4C5", "#FFBED8"],
    title: "Rasberry"
  },
  {
    colors: ["#EAE509", "#7DCE13"],
    title: "Ripe Lime"
  },
].map(gradient => ({ ...gradient, id: idFromString(gradient.title, "6c87beeb-3545-4d7b-b7e1-610c25720c7d") }));