const mongoose = require('mongoose');
// Define menu item schema
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['veg', 'nonveg'], required: true },
  availableToday: { type: Boolean, default: false },
});
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = { MenuItem };