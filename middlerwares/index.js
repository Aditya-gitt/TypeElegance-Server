const { CLIENT_ORIGIN_URL } = require("../constants");
const admin = require("../config/firebase-config");

const verifyToken = async (req, res, next) => {
  const token = req.cookies.jwt.split(" ")[1];
  console.log(token);
  if (!token) {
    res.status(401).send("Access forbidden: No token provided!");
    return;
  }
  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (decodedValue) return next();
    return res.status(401).send("Access forbidden: Invalid token!");
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};

module.exports = { verifyToken };
