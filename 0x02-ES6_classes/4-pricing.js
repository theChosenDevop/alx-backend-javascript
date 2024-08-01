class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount () {
    return this._amount;
  }

  set amount (newAmount) {
    this._amount = newAmount;
  }

  get currency () {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice () {
    return (
      "Pricing" {
	 "_amount": this._amount,
	 "_currency": "Currency" {
	   "_code": this._currency.code, "_name": this._currency.name
	 }
      }
    );
  }
}
