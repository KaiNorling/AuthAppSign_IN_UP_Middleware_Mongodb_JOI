const {MongoClient} = require("mongodb")
const mongoUrl= "mongodb://localhost:27017"
const client = new MongoClient(mongoUrl)


async function mongo(){

    try {
        await client.connect()
        console.log("DB connected ");
    
        const db = await client.db("20210906")
        const users = await db.collection("users")
    
        return {
            users,
        }
    
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = mongo;