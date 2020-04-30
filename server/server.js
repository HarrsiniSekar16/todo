let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// connection string to connect to database
mongoose.connect('mongodb+srv://sa:password-1@master-j0vap.mongodb.net/test?retryWrites=true&w=majority', {});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors enabled
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// initializes the routes and models
const initApp = require('./app/app');
initApp(app);

// starts listening to the port
app.listen(port);