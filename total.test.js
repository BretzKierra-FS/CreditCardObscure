// Requirments
// TDD - create test for a module that will
// obscure a credit card number expect the last 4 digits it will take in a string and output a string
// test to make sure the function obscrures creadit card number that are between the Length of 12 and 16 digits
// if length <= 16 && >= 12
//then return consealed number
//else return "Invalid credit card number"
const obscureCreditCard = require('./obscureCreditCard');

//Test Positive
describe('Credit Card Module Tests', () => {
  test('As a user inputs valid card', () => {
    const result = obscureCreditCard('123456789163');
    console.log(result);
    expect(result.length).toEqual(12);
  });

  //Test Positive for obscure return
  test('Obscures a valid Credit Card', () => {
    const result = obscureCreditCard('123456789123');
    console.log(result);
    expect(result).toBe('********9123');
  });

  //Test Fail
  test('As a user inputs invalid card', () => {
    const result = obscureCreditCard('123');
    console.log(result);
    expect(result).toEqual('Invalid Credit Card');
  });
  //Test Fail
  test('Test null', () => {
    const result = obscureCreditCard(null);
    console.log(result);
    expect(result).toBe('Invalid Credit Card');
  });
});
