
// const validateRepair = (repair) => {
//   const errors = {};

//   // Validate description
//   if (!repair.description || repair.description.trim() === '') {
//     errors.description = 'Description is required';
//   }

//   // Validate category
//   if (!repair.category || !['Airframe', 'Avionics', 'Engine', 'Interior'].includes(repair.category)) {
//     errors.category = 'Invalid category';
//   }

//   // Validate compliance
//   // if (!repair.compliance || !isValidObjectId(repair.compliance)) {
//   //   errors.compliance = 'Invalid compliance';
//   // }

//   // Validate scheduled date
//   if (!repair.scheduledDate || isNaN(Date.parse(repair.scheduledDate))) {
//     errors.scheduledDate = 'Invalid scheduled date';
//   }

//   // Validate status
//   if (!repair.status || !['In Progress', 'Completed', 'Delayed'].includes(repair.status)) {
//     errors.status = 'Invalid status';
//   }

//   // Validate assigned technician
//   // if (!repair.assignedTechnician || !isValidObjectId(repair.assignedTechnician)) {
//   //   errors.assignedTechnician = 'Invalid assigned technician';
//   // }

//   // Validate inventory items
//   if (!repair.inventoryItems || !Array.isArray(repair.inventoryItems) || repair.inventoryItems.length === 0) {
//     errors.inventoryItems = 'Invalid inventory items';
//   } else {
//     repair.inventoryItems.forEach((item, index) => {
//       if (!item.name || item.name.trim() === '') {
//         errors[`inventoryItems[${index}].name`] = 'Name is required';
//       }
//       if (!item.category || !['Airframe', 'Avionics', 'Engine', 'Interior'].includes(item.category)) {
//         errors[`inventoryItems[${index}].category`] = 'Invalid category';
//       }
//       if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0) {
//         errors[`inventoryItems[${index}].quantity`] = 'Invalid quantity';
//       }
//       if (!item.unitPrice || isNaN(item.unitPrice) || item.unitPrice <= 0) {
//         errors[`inventoryItems[${index}].unitPrice`] = 'Invalid unit price';
//       }
//     });
//   }

//   // Validate duration required
//   if (!repair.durationRequired || isNaN(repair.durationRequired) || repair.durationRequired <= 0) {
//     errors.durationRequired = 'Invalid duration required';
//   }

//   return errors;
// };

// module.exports = {
//   validateRepair
// };