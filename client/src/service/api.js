import axios from 'axios'

const url = 'http://localhost:8000'

export const addUser = async (data) => {
    try{
       await axios.post(`${url}/add`, data)
    }catch (error){
        console.log('Error while creating new user', error.message)
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`)
        return response.data
    } catch (error) {
        console.log('Error loading the users data', error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log('Error loading the setConversation api', error.message)
    }
}

export const getConversation = async (data) => {
    try{
        const response = await axios.post(`${url}/conversation/get`, data)
        return response.data
    } catch (error) {
        console.log('Error loading the getConversation api', error.message)
    }
}
export const newMessage = async (data) => {
    try{
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log('Error loading the newMessage api', error.message)
    }
}

export const getMessages = async (id) => {
    try{
        const response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    }catch(error) {
        console.log('Error loading the getMessages api', error.message)

    }
}