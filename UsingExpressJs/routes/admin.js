const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
});

router.post('/product', (req, res , next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = router