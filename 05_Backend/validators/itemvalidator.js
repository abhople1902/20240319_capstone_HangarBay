// Validate inventory item
const validateInventoryItem = (item) => {
  const errors = {};

  // Validate name
  if (!item.name || item.name.trim() === '') {
    errors.name = 'Name is required';
  }

  // Validate category
  if (!item.category || !['Airframe', 'Avionics', 'Engine', 'Interior'].includes(item.category)) {
    errors.category = 'Invalid category';
  }

  // Validate quantity
  if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0) {
    errors.quantity = 'Invalid quantity';
  }

  // Validate unit price
  if (!item.unitPrice || isNaN(item.unitPrice) || item.unitPrice <= 0) {
    errors.unitPrice = 'Invalid unit price';
  }

  return errors;
};

module.exports = {
  validateInventoryItem,
};