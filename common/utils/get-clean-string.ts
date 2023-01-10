const getCleanString = (str: string): string =>
  str.replace(/[^a-z0-9]/gi, "").toLowerCase();

export default getCleanString;
