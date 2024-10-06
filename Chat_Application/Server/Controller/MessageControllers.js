const asyncHandler = require("express-async-handler");
const Chat = require("../Models/chatModels");
const User = require("../Models/userModels");
const Message = require("../Models/messageModels");

exports.sendMessage = asyncHandler(async (req, res) => {
    const { content, chatId } = req.body;
    if (!content || !chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }
    var newMessage = {
        sender: req.user._id,
        text: content,
        chat: chatId,
    };

    try {
        var msg = await Message.create(newMessage);
        msg = await msg.populate("sender", "name pic");
        msg = await msg.populate("chat");
        msg = await User.populate(msg, {
            path: "chat.users",
            select: "name pic email",
        });

        await Chat.findByIdAndUpdate(req.body.chatId, {
            latestMessage: msg,
        });

        res.json(msg);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});

exports.allMessages = asyncHandler(async (req, res) => {
    try {
        const messages = await Message.find({ chat: req.params.chatId })
            .populate("sender", "name pic email")
            .populate("chat");
        res.json(messages);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
});