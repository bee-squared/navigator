var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/navigator', {useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log(`Connected to the '${db.name}' DB on port ${db.port}`);});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

});