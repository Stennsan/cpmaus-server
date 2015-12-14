var mongoose = require('mongoose');

// Create the ContactSchema

var ContactsSchema = new mongoose.Schema ({
  userId: String, 
  dateAdded: String, 
  lastUpdated: String, 
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  companyName: String,
  exposureTool: String,
  exposureDate: String,
  followupDate: String,
  currentGroup: String
});

// Export thr ContactSchema
module.exports = ContactsSchema;