// controllers/paymentController.js
const Payment = require('../models/Payment');
const User = require('../models/User');
const Course = require('../models/Course');

// Handle payment
exports.makePayment = async (req, res) => {
  const { userId, courseId, amount, paymentMethod , transactionId  } = req.body;
  try {
    const payment = new Payment({ userId, transactionId  ,courseId, amount, paymentMethod });
    await payment.save();
    // Logic to verify payment with the payment gateway
    payment.status = 'completed';
    await payment.save();

    // Update user's enrolled courses
    await User.findByIdAndUpdate(userId, { $push: { enrolledCourses: courseId } });

    res.status(201).json({ message: 'Payment successful', payment });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment', error });
  }
};

// Get Payments
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id }).populate('courseId');
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments' });
  }
};