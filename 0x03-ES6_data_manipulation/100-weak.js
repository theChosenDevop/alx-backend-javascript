/**
 * Export instance of WeakMap
 * @returns: weaKMap
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  const endpointIncrement = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, endpointIncrement + 1);

  if (endpointIncrement >= 4) {
    throw new Error('Endpoint load is high');
  }
}
