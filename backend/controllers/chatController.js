// @desc    Send message to AI
// @route   POST /api/chat
// @access  Public
const sendMessage = (req, res) => {
    const { message } = req.body;

    // Placeholder response until NLP is integrated
    // In future, this will call Google Gemini API
    const response = `I understanding you said: "${message}". I am a Health Assistant bot (under construction).`;

    res.json({ reply: response });
};

// @desc    Clear chat history
// @route   POST /api/chat/clear
// @access  Public
const clearChat = (req, res) => {
    // If we were using sessions, we would clear it here.
    // For now, just return success.
    res.json({ message: 'Conversation cleared.' });
};

module.exports = {
    sendMessage,
    clearChat
};
