const { Schema, model } = require('mongoose')

const MessageSchema = new Schema(
    {
        postId: {
            type: String,
        },
        senderId: {
            type: String,
        },
        text: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

const Message = model('Message', MessageSchema)
module.exports = Message
