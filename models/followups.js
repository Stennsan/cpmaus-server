var mongoose = require('mongoose');

// Create the ContactSchema

var FollowupsSchema = new mongoose.Schema ({
  userId: String, 
  contactId: String, 
  dateExposed: String, 
  exposureTool: String,
  followupDate: String
});

// Export thr ContactSchema
module.exports = FollowupsSchema;