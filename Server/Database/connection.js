
const mongoose = require('mongoose');

var database = "mernApp";
var conn1 = mongoose.createConnection('mongodb://127.0.0.1:27017/' + database, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

conn1.on('error', (err) => {
    console.log("Error while connection to Database", err);
})

var modelObject = require('./connectionModels')(conn1);

module.exports = conn1;