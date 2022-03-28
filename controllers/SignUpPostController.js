const {hashPassword }= require("../modules/bcrypt")
const {SignUpValidation}= require("../modules/validation")

module.exports = async function SignUpPostController (req, res){

    try {
        const data = await SignUpValidation.validateAsync(req.body)
        console.log(data);
        let user = await req.db.users.findOne({
            email:data.email.toLowerCase(),
        })

        if(user) throw new Error("Email already exists" )

        user = await req.db.users.insertOne({
            ...data,
            password: await hashPassword(data.password)
            

        })

         console.log(data);
       

        res.redirect("/signin")
    } catch (error) {
        console.log( error);
        res.render("signup", {error,})
    }
}