const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageId: { type: mongoose.Schema.Types.ObjectId, required: true },
  ingredients: { type: String, required: true },
  preparation: { type: String, required: true },
});

module.exports = mongoose.model('Thing', thingSchema);
