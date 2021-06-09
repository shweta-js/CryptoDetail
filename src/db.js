
const mongoose = require('mongoose');
const connection = "mongodb+srv://shweta:shwetastock@cluster0.gw0cs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));