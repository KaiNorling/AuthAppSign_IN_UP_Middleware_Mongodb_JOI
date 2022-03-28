const { sign } = require("jsonwebtoken")
const {compareCrypt }= require("../modules/bcrypt")
const { createToken } = require("../modules/jwt")
const {SignInValidation}= require("../modules/validation")


module.exports = async function SignInPostController(req,res) {

    try {
        const data = await SignInValidation.validateAsync(req.body)

        const user = await req.db.users.findOne({
            email:data.email,
        })
        console.log(user);
        if(!user) throw new Error("User Not Found")

       
        const isTrust =await compareCrypt(user.password , data.password)

        console.log(isTrust)
        if(!isTrust) throw new Error("Password is incorrect")

        const token = await createToken({id: user._id,})
        res.cookie("token", token ).redirect("/profile")

    } catch (error) {
        res.render("signin",{error,})
        
    }

}

