import User from "../model/user.js";
import bcrypt from "bcryptjs";


export const userController = {
    async createUser(req, res) {
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
    },
  };
  

  
  
  