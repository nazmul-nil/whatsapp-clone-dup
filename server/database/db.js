import mongoose from 'mongoose'

import dotenv from 'dotenv'


dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
const Connection = async () => {
    // const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-de5mvcp-shard-00-00.xk1tnvh.mongodb.net:27017,ac-de5mvcp-shard-00-01.xk1tnvh.mongodb.net:27017,ac-de5mvcp-shard-00-02.xk1tnvh.mongodb.net:27017/?ssl=true&replicaSet=atlas-hdde8e-shard-0&authSource=admin&retryWrites=true&w=majority`

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-de5mvcp-shard-00-00.xk1tnvh.mongodb.net:27017,ac-de5mvcp-shard-00-01.xk1tnvh.mongodb.net:27017,ac-de5mvcp-shard-00-02.xk1tnvh.mongodb.net:27017/?ssl=true&replicaSet=atlas-hdde8e-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true})
        console.log('Database connected successfully')
    } catch (error){
        console.log('Error while connecting with database', error.message)
    }
 }

 export default Connection