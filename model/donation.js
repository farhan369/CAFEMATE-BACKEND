const mongoose = require('mongoose');
const donationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }],
  });
  const Donation = mongoose.model('Donation', donationSchema);
  module.exports = { Donation };