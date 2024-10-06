exports.getTest = async (req, res) => {
    try {
        res.send("API is working");
        // const messages = await Message.find({
        //     conversationId: req.params.conversationId,
        // }).sort({ createdAt: 1 });
        // res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
};