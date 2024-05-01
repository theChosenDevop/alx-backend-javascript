/**
 * Updates the quantity of single items by 100
 * @param {Array} groceriesMap - A map of Array of objects
 * @returns A updated map for all items with initial quantity at 1
 */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceriesMap.entries()) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }

  return groceriesMap;
}
