
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/authentication')
    .then(() => console.log("Db Connected Successfully!"))
    .catch(err => console.log("Connection Error", err));