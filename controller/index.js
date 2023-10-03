const express = require("express");
const { verifyToken } = require("./../middlerwares");
var cors = require("cors");
const { CORS_OPTIONS } = require("../constants");
const cookieParser = require("cookie-parser");

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(cors(CORS_OPTIONS));
app.use(verifyToken);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
