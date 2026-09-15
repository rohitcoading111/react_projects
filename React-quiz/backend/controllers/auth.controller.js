import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { generateToken } from '../utils/generateToken.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function userResponse(user) {
  return { id: user._id, username: user.username, email: user.email };
}

export async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const normalizedEmail = email?.trim().toLowerCase();

    if (!username?.trim() || !normalizedEmail || !password || !emailPattern.test(normalizedEmail)) {
      return res.status(400).json({ success: false, message: 'Username, valid email, and password are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
    }

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username: username.trim(), email: normalizedEmail, password: hashedPassword });

    return res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: { user: userResponse(user), token: generateToken(user._id.toString()) },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'Email is already registered' });
    }
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const { password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email }).select('+password');
    const passwordMatches = user && await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    return res.json({
      success: true,
      message: 'Login successful',
      data: { user: userResponse(user), token: generateToken(user._id.toString()) },
    });
  } catch (error) {
    next(error);
  }
}
