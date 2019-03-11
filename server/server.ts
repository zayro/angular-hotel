// =================================================================
// get the packages we need ========================================
// =================================================================
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');


// use body parser so we can get info from POST and/or URL parameters
app.use(express.static('./dist/hotel')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// use morgan to log requests to the console
app.use(morgan('dev'));

// =================================================================
// configuration ===================================================
// =================================================================

const port = process.env.PORT || 5000; // used to create, sign, and verify tokens




// =================================================================
// routes ==========================================================
// =================================================================

require('./routes/routes.ts')(app);



// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
