const express = require("express");
const app = express();

const https = require("https");

const { getCredentials } = require("./util/credentials");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/member"));
app.use("/mail", require("./routes/sendmail"));

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
