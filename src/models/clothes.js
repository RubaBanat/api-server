'use strict';
const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
  type: { type: String, required: true },
  size: { type: String },
});
// this line will create the collection (sql table) with name 'clothes'
const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;