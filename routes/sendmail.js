const { mailgun: mailgunConfig } = require("./../config");
const mailgun = require("mailgun-js")({
  apiKey: mailgunConfig.api,
  domain: mailgunConfig.domain,
});
const router = require("express").Router();

const { users } = require("./../config");
const basicAuth = require("express-basic-auth");

router.post(
  "/",
  basicAuth({
    users: users,
    challenge: true,
  }),
  (req, res) => {
    const body = req.body;
    mailgun.messages().send(
      {
        from: body.from,
        to: body.to,
        subject: body.subject,
        text: body.text,
      },
      (error, body) => {
        console.log(error);
        console.log(body);
        res.json({ error: error, body: body });
      }
    );
  }
);

router.post(
  "/invitation",
  basicAuth({
    users: users,
    challenge: true,
  }),
  (req, res) => {
    const body = req.body;
    mailgun.messages().send(
      {
        from: body.from,
        to: body.to,
        subject: body.subject,
        template: "invitation",
        'v:title': body.title,
        'v:year': body.year,
        'v:content': body.content,
        'v:discord': body.discord,
      },
      (error, body) => {
        console.log(error);
        console.log(body);
        res.json({ error: error, body: body });
      }
    );
  }
);

module.exports = router;
