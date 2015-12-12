var mongoose = require('mongoose');

// Create the ContactSchema

var ExposuresSchema = new mongoose.Schema ({
  userId: String, 
  contactId: String, 
  dateExposed: String, 
  exposureTool: String,
  followupDate: String
});

// Export thr ContactSchema
module.exports = ExposuresSchema;