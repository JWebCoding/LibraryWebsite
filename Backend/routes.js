const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const pool = require('./data/config');


//Check to see if file exists
// router.get('/:file', function (req, res, next) {
//     const requestedFile = (__dirname + '/library/' + req.params.file + '.html');

//     if (!fs.existsSync(path.resolve(requestedFile))) {
//         return res.status(404).send(`<h1>Status 404: File '${req.params.file}.html' not found.</h1>`);
//     } else {
//         console.log(`A request was made for the page: '${requestedFile}' at the time: ${Date.now()}`);
//         next();
//     }
// });
app.use(express.static(path.resolve(__dirname, '../client/build')));
router.get('/test', (req, res) => {
    res.json({ message: "TEST" });
})

router.get('/bookViewPage', function (req, res) {
    console.log(req.params.file);
    const requestedFile = (__dirname + 'main/library/bookViewPage.html');
    res.sendFile(path.resolve(requestedFile));
});

router.get('/:file', function (req, res) {
    const requestedFile = (__dirname + '/library/' + req.params.file + '.html');
    res.sendFile(path.resolve(requestedFile));
});

res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))

// function getBookData() {
//     pool.query('select * from library.book where bookID in (7)', function (error, rows, fields) {
//         console.log(rows);
//     });
// }

module.exports = router;