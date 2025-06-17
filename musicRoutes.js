// filepath: d:\Impact Training\groovy\Backend\musicRoutes.js
const express = require('express');
const router = express.Router();
const musicLinks = require('./musicData');

router.get('/music', (req, res) => {
  res.json(musicLinks);
});

module.exports = router;