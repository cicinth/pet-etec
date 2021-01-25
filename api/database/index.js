const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/pet', { useMongoClient: true });


module.exports = mongoose; 
