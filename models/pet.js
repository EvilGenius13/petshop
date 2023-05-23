"use strict";

const mongooePaginate = require('mongoose-paginate');
const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

mongooePaginate.paginate.options = {
  limit: 3
};


const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : { type: String }
  , birthday        : { type: Date }
  , picUrl          : { type: String }
  , picUrlSq        : { type: String }
  , favoriteFood    : { type: String }
  , description     : { type: String }
},
{
  timestamps: true
});
PetSchema.plugin(mongooePaginate);
module.exports = mongoose.model('Pet', PetSchema);
