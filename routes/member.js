const express = require("express");
const router = express.Router();
const member = require("../db/member");
const { users } = require("./../config");
const basicAuth = require("express-basic-auth");

router.get("/", (req, res) => {
  member
    .getAll()
    .then((result) => {
      res.json({ err: null, result: result });
    })
    .catch((err) => {
      res.json({ err: err, result: null });
    });
});

router.get("/:id", (req, res) => {
  member
    .getOne(req.params.id)
    .then((result) => {
      res.json({ err: null, result: result[0] });
    })
    .catch((err) => {
      res.json({ err: err, result: null });
    });
});

router.post(
  "/",
  basicAuth({
    users: users,
    challenge: true,
  }),
  (req, res) => {
    console.log(req);
    member
      .create(req.body)
      .then((result) => {
        res.json({ err: null, result: result });
      })
      .catch((err) => {
        res.json({ err: err, result: null });
      });
  }
);

router.patch(
  "/:id",
  basicAuth({
    users: users,
    challenge: true,
  }),
  (req, res) => {
    member
      .update(req.params.id, req.body)
      .then((result) => {
        res.json({ err: null, result: null });
      })
      .catch((err) => {
        res.json({ err: err, result: null });
      });
  }
);

router.delete(
  "/:id",
  basicAuth({
    users: users,
    challenge: true,
  }),
  (req, res) => {
    member
      .delete(req.params.id)
      .then((result) => {
        res.json({ err: null, result: null });
      })
      .catch((err) => {
        res.json({ err: err, result: null });
      });
  }
);

module.exports = router;
