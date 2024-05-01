/**
 * A boolean value for if Array exist or not
 * @param {Set} set - Set of unique integer values
 * @param {Array} array - Array of integers
 * @returns Boolean if all elements in the array esist within the Set.
 */

export default function hasValuesFromArray(set, array) {
  for (const element of array) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
