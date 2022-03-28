const {sign,verify} =require("jsonwebtoken")
const SECRET_WORD="wells"


module.exports.createToken =(data)=>{
    return sign(data,SECRET_WORD)
}

module.exports.checkToken=(token)=>{
    try {
        return verify(token , SECRET_WORD)
    } catch (error) {
        return false
    }
}