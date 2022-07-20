const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var publicationSchema = new Schema({
  name: String,
  date: String,
  creador: String,

});

module.exports = Publication = mongoose.model('Publication', publicationSchema);