const AdminR = require("./AdminR")
const HomeR = require("./HomeR")
const SignInRoute = require("./SignInRoute.js")
const SignUpRoute = require("./SignUpRoute.js")



module.exports=(server)=>{
    server.use(AdminR.path, AdminR.router)
    server.use(HomeR.path, HomeR.router)
    server.use(SignInRoute.path, SignInRoute.router)
    server.use(SignUpRoute.path, SignUpRoute.router)



    server.use((req,res)=>{res.render("404")})
}