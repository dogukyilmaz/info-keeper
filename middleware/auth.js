const jwt = require("jsonwebtoken");
const config = require("../config/production.json");
let jwtS;

if (process.env.NODE_ENV === 'production') {
  jwtS = process.env.jwtSecret;
}
else {
  jwtS =  config.jwtSecret;
}

module.exports = function(req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // Check if not token
  if(!token){
    return res.status(401).json({ msg: "No token, authorization denied." });
  }

  try {
    const decoded = jwt.verify(token, jwtS);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid!" });
  }
}