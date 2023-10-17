/**
 * The main server file
 */
const express = require('express');
const cors = require('cors');
const router = express.Router();

// Initialize app
const app = express();
app.use(cors());

// Initialize port
port = 5000;

// Set up test routes
router.get('/hello', function (req, res) {
  return res.send({ message: 'Getting Hello World!' });
});

router.post('/hello', function (req, res) {
  return res.send({ message: 'Posting Hello World!' });
});

// Set up execution middleware
app.use(express.json());

// Mount router
app.use('/', router);

// Mount app at port
app.listen(port, () => {
  console.log(`Example app listening at ${port}.`);
});

// Export app
module.exports = app;
