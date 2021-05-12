require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
//const apihandler = require('./_helpers/api');

//const multer = require('multer');

//var fileExtension = require('file-extension')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//app.use(express.json());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

//app.get('/', apihandler);


// //global message for api access
// var data = {
//     msg: "Welcome for CounterFit",
//     info: "This is a root endpoint",
//     Working: "Documentations of other endpoints on working",
//     request:
//       "Without secret key your req cannot connected",
//   };
//   app.route("/").get((req, res) => res.json(data));

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
