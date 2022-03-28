const UserMIddleware = require("../middlewares/UserMIddleware")


const router = require("express").Router()


router.get("/", UserMIddleware, (req,res)=>{
    res.render("profile1",{user:req.user})
})

module.exports={
    router,
    path:"/profile"
}