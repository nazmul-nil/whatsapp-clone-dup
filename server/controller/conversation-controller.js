import Conversation from "../model/Conversation.js"


export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId
        const recieverId = request.body.recieverId

        const exist = await Conversation.findOne({members: {$all: [senderId, recieverId]}})

        if(exist) {
            return response.status(200).json('Conversation already exists')
        }
        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })

        await newConversation.save()
        return response.status(200).json('Conversation added successfully')

    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const getConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId
        const recieverId = request.body.recieverId

        const conversation = await Conversation.findOne({ members: {$all: [senderId, recieverId]}})
        return response.status(200).json(conversation)

    } catch (error) {
        return response.status(500).json(error.message)
    }
}