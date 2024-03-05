const obscureCreditCard = (cardNumber) => {
  // Checks if card is a string, and if it's between 12 and 16 characters
  if (
    typeof cardNumber !== 'string' ||
    cardNumber.length < 12 ||
    cardNumber.length > 16 // <-- Corrected comparison
  ) {
    return 'Invalid Credit Card';
  }

  // Take the last 4 digits of the card number
  const lastFour = cardNumber.slice(-4); // <-- Corrected method

  // Replace the rest of the digits with '*'
  const sensorCard = '*'.repeat(cardNumber.length - 4);

  return `${sensorCard}${lastFour}`;
};

module.exports = obscureCreditCard;