const express = require('express');
const router = express.Router();
const { sendMessage, clearChat } = require('../controllers/chatController');

router.post('/', sendMessage);
router.post('/clear', clearChat);

module.exports = router;
