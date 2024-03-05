### Credit Card Number Obscuration Module and Unit Tests

This repository contains a module for obscuring credit card numbers and associated unit tests written using Test-Driven Development (TDD).

#### Module Description

The module provides a function to obscure a credit card number according to specific criteria:

- The function takes a string as input and returns a string.
- Credit card numbers should be between 12-16 digits in length.
- Any other size should return "Invalid Credit Card".

#### How to Run Unit Tests

To run the unit tests, use the following command:

```
npm test
```

#### Module Usage

To use the module in your project, import it and call the `obscureCreditCardNumber` function with the credit card number as an argument.

```javascript
const { obscureCreditCardNumber } = require('./credit_card_obscure');

const obscuredNumber = obscureCreditCardNumber('1234567890123456');
console.log(obscuredNumber); // Output: '************3456'
```
