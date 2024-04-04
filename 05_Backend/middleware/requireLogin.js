import 'dotenv/config'
import jwt from 'jsonwebtoken'
import {technicianModel} from '../model/index.js'

//Require Function to Login
const requireLogin = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
      return res.status(401).json({ error: "You are not logged in" });
  }

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
          return res.status(401).json({ error: "You must be logged out" });
      }
      // If verification is successful, attach user data to the request object
      req.technician = payload;
      // Call the next middleware or route handler
      next();
  });
};

   
   
export default requireLogin