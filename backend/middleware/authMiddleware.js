require("dotenv").config()

async function authMiddleware(req, res, next) {

    const token = req.headers.authorization

    if(token !== process.env.PORTFOLIO_API_KEY){
        res.status(401).json({message: "Not Authorized"})
        return
    }

    next()
}


module.exports = authMiddleware