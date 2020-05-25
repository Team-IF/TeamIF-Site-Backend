const express = require("express");
const app = express();

const { users } = require("./config");

const basicAuth = require("express-basic-auth");

app.use(basicAuth({ users: users, challenge: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/member"));

app.listen(3000, () => {
  console.log("Start Server");
});
