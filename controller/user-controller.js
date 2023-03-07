import { config } from "dotenv";
config();
import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const createUser = 
    async (req, res) => {
      try {
        const { name, email, phoneNumber, password, isManager } = req.body;
  
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
          return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = bcrypt.hashSync(password)
        // Create a new user instance
        const user = new User({
          name,
          email,
          phoneNumber,
          password: hashedPassword,
          isManager,
        });
  
        // Save user to database
        await user.save();
  
        // Return success message
        return res.status(201).json({ message: "User created successfully" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
    };
 
    export const login = async (req, res) => {
        const { email, password } = req.body;
      
        try {
          const user = await User.findOne({ email });
      
          if (!user) {
            return res.status(404).json({ error: "User not found" });
          }
      
          const isMatch = await bcrypt.compare(password, user.password);
      
          if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
          }
      
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      
          res.json({ token });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Server error" });
        }
      };
  

  
  
  