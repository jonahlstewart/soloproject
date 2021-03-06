const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../../dist/login.html'));
});

router.post('/', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/feed');
});

module.exports = router;
