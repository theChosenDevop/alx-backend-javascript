/* test calculateNumber */
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe("sendPaymentRequestToApi", () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(utils, 'calculateNumber')});
  afterEach(() => {
    sinon.restore();
  });

  it('validate utils.calculateNumber behaviour when sendPaymentrequestApi is invoked',
    () => {
    sendPaymentRequestToApi(100, 20);
    expect(utils.calculateNumber.calledOnce).to.be.true;
    expect(utils.calculateNumber.callCount).to.be.equal(1);
    expect(utils.calculateNumber.called).to.be.true;
    expect(utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(utils.calculateNumber.firstCall.arg[0]).to.equal("SUM");
    });
});
