import bcrypt from "bcrypt";
import Technician from "../models/technicianModel.js";
// import Organization from "../model/organization.js";
// import signupValidation from "../dependencies/validations/signupValidation.js";
import jwt from "jsonwebtoken";
// import { passwordValidator } from "../dependencies/validations/userValidations.js";
import nodemailer from "nodemailer";
import randomstring from "randomstring";
import {config} from "../config.js";

const technicianSignup = async (req, res) => {
  try {
    const { username, role, specializations, experienceYears, email, password} = req.body;
    const existingUser = await Technician.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newTechnician = new Technician({
      username: username,
      password: hashedPassword,
      email: email,
      role: role,
      specializations: specializations,
      experienceYears: experienceYears
    });
    
    await newTechnician.save();
    
    res
      .status(201)
      .json({ message: "Technician registered successfully", technician: newTechnician });
  } catch (error) {
    console.error("Error during technician registration:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
// Controller function for user login
const technicianLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const tech = await Technician.findOne({ email });
    
    if (!tech) {
      return res.status(404).json({ error: "Technican not registered" });
    }
    
    const isPasswordValid = await bcrypt.compare(password, tech.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    
    const token = jwt.sign({ _id: tech._id, role: tech.role }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    
    res.status(200).json({
      message: "Technician signed in successfully",
      username: tech.username,
      token,
      role: tech.role,
      techId: tech._id,
      specialization: tech.specializations
    });
  } catch (error) {
    console.error("Error during technican login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export {
  technicianSignup,
  technicianLogin,
};