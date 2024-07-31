const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['phy', 'math', 'dg'] },
  videos: [{ title: String, url: String, isFree: { type: Boolean, default: false } }],
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  category: { type: String },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Course', courseSchema);
