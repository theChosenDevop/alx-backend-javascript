/* Payment Module */

const calculateNumber = require('utils').calculateNumber
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  output = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${output}`);
}

module.exports = sendPaymentRequestToApi;
