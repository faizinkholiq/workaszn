import { Request, Response } from 'express';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Respond without password
    const { password: _, ...userData } = user.toObject();
    res.status(201).json(userData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Compare password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ error: 'Invalid email or password.' });
    // }

    // Generate JWT
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.JWT_SECRET as string,
    //   { expiresIn: '1h' }
    // );
    let token = "HEHEHE"
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};