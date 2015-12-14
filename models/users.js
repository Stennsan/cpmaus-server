var mongoose = require('mongoose');

// Create the ContactSchema

var UsersSchema = new mongoose.Schema ({
  username: String,
  hashedPassword: String, 
  dateAdded: String, 
  lastUpdated: String, 
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  status: String
});

// Export thr ContactSchema
module.exports = UsersSchema;