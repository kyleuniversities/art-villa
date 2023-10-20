/**
 * post-router: Router for strictly post related queries
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const Post = require('../models/Post');

/**
 * Router setup methods
 */

// Prepare request parser
router.use(bodyParser.json());

// Prepare CORS functionality
router.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

/**
 * Post API Routes
 */

// CREATE method
// Add a post into the database
router.post('/posts', async (req, res) => {
  try {
    const post = await Post.query().insert({
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
    });
    return res.send(post);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// READ method
// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.query();
    return res.send(posts);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// READ method
// Get a post by id
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Post.query().where('id', req.params.id).first();
    return res.send(post);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// UPDATE method
// Patch a post with a given id
router.patch('/posts/:id', async (req, res) => {
  try {
    const post = await Post.query().patch(req.body).findById(req.params.id);
    return res.send(post);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// DELETE method
// Delete a post with a given id
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await Post.query().deleteById(req.params.id);
    return res.send(post);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// Export routes
module.exports = router;
