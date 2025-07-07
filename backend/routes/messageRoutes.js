const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

router.post("/", async (req, res) => {
    const { name, email, contact, message } = req.body;

    try {
        const newMsg = new Message({ name, email, contact, message });
        await newMsg.save();
        res.status(201).json({ success: true, msg: "Message sent!" });
    } catch (err) {
        // ✅ Handle duplicate email error
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
            return res.status(400).json({
                success: false,
                msg: "This email has already submitted a message."
            });
        }

        // 🔴 Log and return general server error
        console.error("Server error:", err.message);
        res.status(500).json({ success: false, msg: "Something went wrong on the server." });
    }
});

module.exports = router;
