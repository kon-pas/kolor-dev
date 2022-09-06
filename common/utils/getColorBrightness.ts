import { convert } from 'colvertize';

const getColorBrightness: {
  (color: string): number
} = color => convert(color, 'hsl').l;

export default getColorBrightness;