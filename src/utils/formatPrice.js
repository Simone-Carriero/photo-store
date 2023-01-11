export const formatPrice = (number) => {
  const newNumber = number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return newNumber;
};
