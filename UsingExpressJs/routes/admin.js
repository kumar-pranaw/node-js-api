const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const rootDir = require('../util/path');

app.use(bodyParser.urlencoded({extended:false}));

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res , next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = router