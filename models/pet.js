"use strict";

const mongooePaginate = require('mongoose-paginate');
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongooePaginate.paginate.options = {
  limit: 3
};


const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: {type: String, required: true }
  , species: { type: String, required: true }
  , picUrl: { type: String }
  , picUrlSq: { type: String }
  , avatarUrl: { type: String, required: true }
  , favoriteFood: { type: String, required: true }
  , description: { type: String, minlength: 140, required: true }
  , price: { type: Number, required: true }
}, {
  timestamps: true
});

PetSchema.plugin(mongooePaginate);
module.exports = mongoose.model('Pet', PetSchema);
