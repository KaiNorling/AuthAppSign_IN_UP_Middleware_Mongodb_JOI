
const router = require("express").Router()
const SignUpPostController=require("../controllers/SignUpPostController")



router.get("/", (req,res)=>{
    res.render("signup", { user:req.user,})
})


router.post("/", SignUpPostController)





module.exports={
    router,
    path:"/signup", 

}