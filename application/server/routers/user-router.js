/**
 * user-router: Router for strictly user related queries
 */
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

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
 * User API Routes
 */

// CREATE method
// Add a user into the database
router.post('/users', async (req, res) => {
  try {
    const user = await User.query().insert({
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    return res.send(user);
  } catch (error) {
    return res.status(500).json({
      error_message: error.message,
    });
  }
});

// READ method
// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.query();
    return res.send(users);
  } catch (error) {
    return res.status(500).json({
      error_message: 'Server Error',
    });
  }
});

// READ method
// Get a user by id
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.query().where('id', req.params.id).first();
    return res.send(user);
  } catch (error) {
    return res.status(500).json({
      error_message: error.message,
    });
  }
});

// UPDATE method
// Patch a user with a given id
router.patch('/users/:id', async (req, res) => {
  try {
    const user = await User.query().patch(req.body).findById(req.params.id);
    return res.send({ message: 'Updated!' });
  } catch (error) {
    return res.status(500).json({
      error_message: error.message,
    });
  }
});

// DELETE method
// Delete a user with a given id
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.query().deleteById(req.params.id);
    return res.send({ message: 'Deleted!' });
  } catch (error) {
    return res.status(500).json({
      error_message: error.message,
    });
  }
});

// Export routes
module.exports = router;
