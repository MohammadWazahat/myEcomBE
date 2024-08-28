
const jwt = require('jsonwebtoken')

const generateToken = (x) => {
    // console.log(x)
    // console.log(process.env.JWT_SECRET)
    return jwt.sign(x, process.env.JWT_SECRET ,{expiresIn :3600});
}

module.exports = generateToken ;