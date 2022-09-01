import { GradientScheme } from '@interfaces';
import { fromString as idFromString } from 'uuidv4';

declare function fromString(string: string): string;

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
    colors: ["#1C0A00", "#603601", "#CC9544"],
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
].map(gradient => ({ ...gradient, id: idFromString(gradient.title) }));