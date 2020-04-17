
const express = require('express');
const router = express.Router();

const controller = require('../controllers/standard.controller.js');

const get = router.get('/' , controller.get);

  module.exports = router;

