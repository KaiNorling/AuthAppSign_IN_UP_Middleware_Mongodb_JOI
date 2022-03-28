require("dotenv").config()
const express = require("express")
const server = express()
const cookieParser=require("cookie-parser")
const path = require("path")
const routes = require("./routes/routes")
const mongo = require("./modules/mongo")
const UserMIddleware = require("./middlewares/UserMIddleware")





const PORT = process.env.PORT || 2000
server.listen(PORT, ()=> console.log(`SERVER RUNNING AT ${PORT}`))


//SETTINGS
server.set("view engine", "ejs")
//MIDDLEWARES
server.use(express.json())
server.use(express.urlencoded({extended:true,}))
server.use(cookieParser())
server.use(express.static(path.join(__dirname, "public")))





;(async function (){
    const db = await mongo();
    try {
      
         server.use((req,res,next)=>{ req.db=db; next()});
         server.use(UserMIddleware)
      
    } catch (error) {
        console.log(error);
    } finally{
         routes(server)
    }


})();
