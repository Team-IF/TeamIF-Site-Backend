const express = require("express");
const app = express();

const https = require("https");

const { users } = require("./config");
const { getCredentials } = require("./credentials");

const basicAuth = require("express-basic-auth");

app.use(basicAuth({ users: users, challenge: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/member"));

if (process.env.NODE_ENV === "production") {
  const credentials = getCredentials();
  https.createServer(credentials, app).listen(8443, () => {
    console.log("HTTPS Server Running on port 8443");
  });
} else {
  app.listen(3000, () => {
    console.log("Start Server");
  });
}
