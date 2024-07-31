// controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const validator = require('validator');
const User = require('../models/User');
// const logger = require('../config/logger'); // Import a custom logger
const rateLimit = require('express-rate-limit'); // Import rate limiter

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Rate limiting middleware for registration and login
const registerLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per `window` (15 minutes)
  message: 'Too many registration requests from this IP, please try again later.',
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per `window` (15 minutes)
  message: 'Too many login attempts from this IP, please try again later.',
});

// Hash password before saving
exports.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// Compare password for login
exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT token for authentication
exports.generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, "process.env.JWT_SECRET", { expiresIn: '1h' });
};

// Generate email verification token
exports.generateVerificationToken = () => {
  return {
    token: crypto.randomBytes(32).toString('hex'),
    expiration: Date.now() + 3600000 // 1 hour
  };
};

// Generate password reset token
exports.generatePasswordResetToken = () => {
  return {
    token: crypto.randomBytes(32).toString('hex'),
    expiration: Date.now() + 3600000 // 1 hour
  };
};

// User registration handler
exports.register = [registerLimiter, async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
  }

  // Additional password validation
  if (!validator.isStrongPassword(password, { minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
    return res.status(400).json({ message: 'Password must include an uppercase letter, a number, and a symbol.' });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists. Please use a different email or username.' });
    }

    const hashedPassword = await exports.hashPassword(password);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
      isVerified: false
    });

    // Generate verification token
    const { token, expiration } = exports.generateVerificationToken();
    newUser.verificationToken = token;
    newUser.tokenExpiration = expiration;

    await newUser.save();

    // Send verification email
    const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verification',
      text: `Click the following link to verify your email: ${verificationUrl}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ message: 'Error sending verification email' });
      }
      console.log('Email sent:', info.response);
    });

    // logger.info(`User registered: ${username} (${email})`);
      console.log("user create")
    res.status(201).json({
      message: 'User registered successfully. Please verify your email.',
      user: { id: newUser._id, username: newUser.username, role: newUser.role }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
    logger.error(`Error registering user: ${error.message}`);
  }
}];

// User login handler
exports.login = [loginLimiter, async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await exports.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before logging in' });
    }

    const token = exports.generateToken(user);
    res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
    // logger.error(`Error logging in: ${error.message}`);
  }
}];

// Email verification handler
exports.verifyEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verificationToken: token, tokenExpiration: { $gt: Date.now() } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.tokenExpiration = undefined;
    await user.save();

    res.json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying email', error });
    // logger.error(`Error verifying email: ${error.message}`);
  }
};

// Password reset request handler
exports.requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Please provide your email.' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate password reset token
    const { token, expiration } = exports.generatePasswordResetToken();
    user.passwordResetToken = token;
    user.passwordResetTokenExpiration = expiration;

    await user.save();

    // Send password reset email
    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${token}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetUrl}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        return res.status(500).json({ message: 'Error sending password reset email' });
      }
      console.log('Email sent:', info.response);
    });

    res.json({ message: 'Password reset link sent to your email.' });
  } catch (error) {
    res.status(500).json({ message: 'Error requesting password reset', error });
    logger.error(`Error requesting password reset: ${error.message}`);
  }
};

// Password reset handler
exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: 'Please provide token and new password.' });
  }

  try {
    const user = await User.findOne({ 
      passwordResetToken: token, 
      passwordResetTokenExpiration: { $gt: Date.now() }
    });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired reset token' });
    }

    const hashedPassword = await exports.hashPassword(newPassword);
    user.password = hashedPassword;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpiration = undefined;
    
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password', error });
    // logger.error(`Error resetting password: ${error.message}`);
  }
};
// if (!validator.isStrongPassword(password, { minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
//   return res.status(400).json({ message: 'Password must be at least 8 characters long and include an uppercase letter, a number, and a symbol.' });
// }