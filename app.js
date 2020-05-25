const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", require("./routes/member"));

app.listen(3000, () => {
  console.log("Start Server");
});
