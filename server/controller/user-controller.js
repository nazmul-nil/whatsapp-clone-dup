import User from "../model/User.js"


export const addUser = async (request, response) => {
    try {
        const exist = await User.findOne({ sub: request.body.sub})
        if(exist) {
            response.status(200).json({ msg: 'User already exists'})
            return
        }

        const newUser = new User(request.body)
        await newUser.save()
        return response.status(200).json(newUser)
        // console.log(request.body)
    } catch (error) {
        return response.status(500).json(error.message);
    }
}


export const getUsers = async (request, response) => {
    try {
        const users = await User.find({})
       
        return response.status(200).json(users)
    } catch (error) {
        return response.status(500).json(error.message);
    }
}