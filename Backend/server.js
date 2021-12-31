const express = require('express');
const app = express();
const port = process.env.port || 3000;
const library = require('./routes.js');
const pool = require('./data/config');


app.use('/library/stylesheets', express.static('stylesheets'));
app.use('/library/images', express.static('images'));
app.use('/library/scripts', express.static('scripts'));
app.use('/library/', library);


app.listen(port, function () {
    console.log(`Server listening on port ${port}.`);
});

// pool.getConnection(function (err, conn) {
//     pool.query('select * from library.book where bookID=7', function (err, rows, fields) {
//         console.log(rows);
//     });
// });


