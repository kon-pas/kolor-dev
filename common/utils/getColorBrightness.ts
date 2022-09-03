import { convert } from 'colvertize';

function getColorBrightness (color: string): number {
  return convert(color, 'hsl').l;
}

export default getColorBrightness;