
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketId: 
  {
     type: String, 
    unique: true 
  }, 
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'closed'],
    default: 'open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const ticketModel = mongoose.model('Ticket', ticketSchema);
module.exports = ticketModel;
