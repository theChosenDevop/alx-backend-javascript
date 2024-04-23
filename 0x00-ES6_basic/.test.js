import getNeighborhoodsList from './2-arrow.js'

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Fatade');
test('getNeighborhoodsList['SOMA', 'Union Square'] + newNeighborhood equal  "Fatade"', () => { expect(getNeighborhoodsList.addNeighborhood('Fatade').toBe(['SOMA', 'Union Square', 'Fatade']))});
