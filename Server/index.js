
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const http = require('http');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

var app = express();
var PORT = process.env.PORT || 3334;
var config = require('./config.json');

app.disable("x-powered-by");
app.use(helmet({
    contentSecurityPolicy: false
}));

// white listing origin from infinityCoding.com
let whitelist = [/\.infinitycoding\.in$/];
if (process.env.NODE_ENV === 'development') {
    whitelist.push('http://localhost:3333');
}
app.use(cors({
    origin: whitelist,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'VikramJeetSinwal',
    resave: false,
    saveUninitialized: true
}));

app.set('trust proxy', 1);


const MongoDBConnection = require('./Database/connection');
//const MySqlConnection = require('./Database/gammaDBConnection/connection');

let prefix = '/api/';

//app.use('/api/pricing', require('./controllers/pricing.controller')({ MongoDBConnection }));
app.use(`${prefix}users`, require('./Controllers/UsersController')({ MongoDBConnection }));
app.use(`${prefix}menuModule`, require('./Controllers/MenuModuleController')({ MongoDBConnection }));
app.use(`${prefix}role`, require('./Controllers/RoleController')({ MongoDBConnection }));
app.use(`${prefix}callback`, require('./Controllers/CallbackController')({ MongoDBConnection }));


// let reactHTMLPath = process.env.NODE_ENV === 'production' ? "../FX-React/build" : "";

// reactHTMLPath = path.join(__dirname, reactHTMLPath);
// console.log('this will be the  build file path\n', reactHTMLPath + '/index.html');
// app.use(express.static(reactHTMLPath));
// // app.use(express.static(path.join(__dirname, 'build')));
// app.get('*', (req, res) => {
//     res.sendFile(reactHTMLPath + '/index.html')
//     // res.sendFile('index.html')
// });

var server = http.createServer(app);
server.listen(PORT, () => {
    console.log("Server started at", PORT);
});
