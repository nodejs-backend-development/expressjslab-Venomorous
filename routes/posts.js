const express = require('express');
const { getPosts, addPost } = require('../controllers/posts.controller');

const router = express.Router();

/* GET users listing. */
router.get('/:id', getPosts);
router.post('/new/:id', addPost);

module.exports = router;
