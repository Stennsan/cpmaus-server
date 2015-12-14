var mongoose = require('mongoose');

// Create the ContactSchema

var FollowupsSchema = new mongoose.Schema ({
  userId: String, 
  contactId: String, 
  followupDate: String, 
  followupTool: String
});

// Export thr ContactSchema
module.exports = FollowupsSchema;