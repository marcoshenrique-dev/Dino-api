
const express = require('express');
const router = express.Router();

const controller = require('../controllers/dino.controller.js');

  router.post('/dino' , controller.post);
  router.get('/dino' , controller.get);
  router.get('/dino/filter' , controller.getFilter);
  router.get('/dino/:id' , controller.getById);

  module.exports = router;

