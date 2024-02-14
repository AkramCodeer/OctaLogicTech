const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  numWheels: {
    type: Number,
    enum: [2, 4], // Restrict to 2 or 4 wheels
    required: true,
  },
  vehicleModel: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now, // Default to current date
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

// Virtual property to calculate booking duration
userSchema.virtual('bookingDuration').get(function() {
  return this.endDate - this.startDate;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
