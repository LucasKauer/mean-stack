var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beersSchema = new Schema({
    Appearance: String,
    Aroma: String,
    Flavour: String,
    MouthFeel: String,
    Strength: String,
    Style: String,
    Brewery: String
});

var Beer = mongoose.model('beers', beersSchema);

module.exports = Beer;