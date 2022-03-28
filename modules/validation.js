const Joi = require("joi")



module.exports={
    SignUpValidation: Joi.object({
        name: Joi.string().min(3).max(32).required(),
        surname: Joi.string().min(3).max(32).required(),
        email: Joi.string().email().required().lowercase().error(new Error ("Email is invalid please correct your email")),
        phonenumber: Joi.number().required(),
        password:Joi.string().min(4).required() ,

 
    }),

    SignInValidation: Joi.object({
        email: Joi.string().email().required().error(new Error ("Email is invalid")),
        password:Joi.string().min(4).required() ,
    })
}