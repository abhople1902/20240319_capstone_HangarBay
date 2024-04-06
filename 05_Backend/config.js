// To generate a secret key using salt
// const bcrypt = require('bcryptjs');

// const generateSecretKey = async () => {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const secretKey = await bcrypt.hash('FlyHigh', salt);
//     console.log('JWT Secret Key:', secretKey);
//   } catch (error) {
//     console.error('Error generating secret key:', error);
//   }
// };

// generateSecretKey();



// require('dotenv').config();
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;

const config = {
  emailUser:'atharvanhsm@gmail.com',
  emailPassword:'amqw aoey kolu xspf'
}
export { JWT_SECRET, config };