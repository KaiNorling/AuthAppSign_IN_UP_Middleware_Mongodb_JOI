// const bcrypt   = require("bcrypt")

// module.exports.createCrypt = async function createCrypt(password){
//     const salt = await bcrypt.genSalt(10)
//     return await bcrypt.hash(password, salt)
// }

// module.exports.compareCrypt = async function compareCrypt(crypt,password,){
//     return await bcrypt.compare(password,crypt)
// }

const {genSalt, hash, compare} = require("bcrypt")


async function hashPassword (password){
    const salt = await genSalt(10);
    return await hash(password, salt)
}

 async function compareCrypt (crypt, password){
    return await compare(password, crypt)
}

module.exports={
    hashPassword,
    compareCrypt,
}


