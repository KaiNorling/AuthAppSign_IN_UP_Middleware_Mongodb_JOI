
const router = require("express").Router()
const SignInPostController = require("../controllers/SignInPostController")

router.get("/", (req,res)=>{
    res.render("signin",{ user:req.user,})
})


router.post("/", SignInPostController)



module.exports={
    router,
    path:"/signin", 

}