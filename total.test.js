// Requirments
// TDD - create test for a module that will
// obscure a credit card number expect the last 4 digits it will take in a string and output a string
// test to make sure the function obscrures creadit card number that are between the Length of 12 and 16 digits
// if length <= 16 && >= 12
//then return consealed number
//else return "Invalid credit card number"
const obscureCreditCard = require('./obscureCreditCard');

describe('Total Module Tests', () => {
  test('As a user the card number is a valid length', () => {
    const result = obscureCreditCard('123456789123');
    console.log(result);
    expect(result.length).toEqual(12);
  });
});
