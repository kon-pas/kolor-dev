function getColorBrightness (color: string) {
  var c = color.substring(1);      // strip #
  var rgb = parseInt(c, 16);   // convert rrggbb to decimal
  // var r = (rgb >> 16) & 0xff;
  // var g = (rgb >>  8) & 0xff;
  var b = (rgb >>  0) & 0xff;
  // return  0.2126 * r + 0.7152 * g + 0.0722 * b;
  return  0.0722 * b;
}

export default getColorBrightness;