const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//  localhost:3000/posts
router.get('/', (req, res) => {
    res.send('Posts page');
});


module.exports = router;
