/**
 * A concatenated String
 * @param {Set} set - A Set
 * @param {String} startString - A subset of the beginning of a String
 * @returns A string of all the set values that start with a specific string(stratString)
 */
export default function cleanSet(set, startString) {
  if (startString === undefined || startString === '') return '';

  const filteredString = [...set].filter((string) => string.startsWith(startString));

  return filteredString.map((string) => (string ? string.slice(startString) : '')).join('-');
}
