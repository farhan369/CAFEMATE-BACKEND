const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      qty: { type: Number, required: true },
      itemPrice: { type: Number, required: true }
    }],
    billAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['unpaid', 'paid'], default: 'unpaid' },
    orderStatus: { type: String, enum: ['confirmed', 'delivered'], default: 'confirmed' },
    createdAt: { type: Date, default: Date.now },
  });
  const Order = mongoose.model('Order', orderSchema);
  module.exports = { Order };

  