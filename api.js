const express = require('express');
const router = express.Router();

// your first API endpoint... 
router.get("/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Who am I endpoint
router.get("/whoami", function(req, res) {
  let ipaddress = req.ip;
  let language = req.headers['accept-language'];
  let software = req.headers['user-agent'];
  res.json({ ipaddress, language, software });
});

module.exports = router;
