const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello From Loveleen Kaur</h1>');
});



module.exports = router