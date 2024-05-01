/**
 * Export instance of WeakMap
 * @returns: weaKMap
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  const endpointIncrement = weak
}
