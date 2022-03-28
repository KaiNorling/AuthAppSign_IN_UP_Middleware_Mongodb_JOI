const { checkToken } = require("../modules/jwt")



module.exports=async function UserMIddleware (req, res,next){
    if(!req.cookies.token){
        next()
    }else{
        const isTrust= await checkToken(req.cookies.token)
        if(!isTrust){
            next()
        } else{
            req.user = isTrust; 
            next() 
        }
    }


}